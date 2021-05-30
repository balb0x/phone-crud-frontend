import * as React from "react";
import { Card, CardContent, CardHeader } from '@material-ui/core';
import Forecast from "./Weather";

/**
 * Dashboard.js
 * Presents a Forecast component inside a card object, showing the weather
 * info
 * @returns {JSX.Element}
 */

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <div>
        <Card>
            <CardHeader title="Welcome to the administration" />
            <CardContent><Forecast /></CardContent>
        </Card>
    </div>

);