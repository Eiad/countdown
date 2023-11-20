import { useEffect } from "react";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Page, Layout, Card, Text } from "@shopify/polaris";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  await authenticate.admin(request);
  return json({});
};

export default function Index() {
  const data = useLoaderData();

  useEffect(() => {
    // Perform any on-load effects here
  }, []);

  return (
    <Page title="Counter App Dashboard">
      <Layout>
        <Layout.Section>
          <Card sectioned title="Welcome to the Counter App!">
            <Text variant="headingLg">Setting up the Counter</Text>
            <Text variant="subdued">
              <p>
                To add the counter to your store's theme, follow these steps:
              </p>
              <ol>
                <li>
                  Go to the Online Store &gt; Themes in your Shopify admin.
                </li>
                <li>Click Customize next to the theme you want to edit.</li>
                <li>In the theme editor, click Add section.</li>
                <li>
                  Select the "Hello" block from the list of available blocks.
                </li>
                <li>Adjust the block settings as desired and click Save.</li>
              </ol>
              <p>
                Now, the "Hello" text will appear on your store's pages wherever
                you placed the block.
              </p>
              <p>
                This is just the beginning. More features and settings will be
                available as the app evolves.
              </p>
            </Text>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
