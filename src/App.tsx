import { Box, Center, Container, Flex, Text } from "@chakra-ui/react";
import React, { lazy } from "react";
import { Layout } from "./layout";

const RemoteApp = React.lazy(() => import('remoteApp/App'));


export const App: React.FC = () => {
    return (
        <Layout>
            <RemoteApp />
        </Layout>
    )
};