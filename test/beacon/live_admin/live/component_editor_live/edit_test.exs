defmodule Beacon.LiveAdmin.ComponentEditorLive.EditTest do
  use Beacon.LiveAdmin.ConnCase, async: false
  import Beacon.LiveAdminTest.Cluster, only: [rpc: 4]

  setup do
    node = :"node1@127.0.0.1"

    component =
      rpc(node, Beacon.Content, :create_component!, [
        %{
          site: "site_a",
          name: "site_a_header",
          description: "Site A - Header",
          template: "<h1>header</h1>",
          example: "<.header />"
        }
      ])

    on_exit(fn ->
      rpc(node, MyApp.Repo, :delete_all, [Beacon.Content.Component, [log: false]])
    end)

    [component: component]
  end

  test "save changes", %{conn: conn, component: component} do
    {:ok, live, _html} = live(conn, "/admin/site_a/components/#{component.id}")

    live
    |> form("#component-form", component: %{name: "site_a_other_header"})
    |> render_submit()

    {:ok, _live, html} = live(conn, "/admin/site_a/components")

    assert html =~ "site_a_other_header"
  end
end
