import React, {Component} from "react";
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: '/api/',
    timeout: 2000,
    headers: { 'X-Custom-Header': 'foobar' }
  });

export default class AxiosMain extends Component {
    render() {
      return <div>
          <Request 
          instance={axios.create({})} /* custom instance of axios - optional */
          method="" /* get, delete, head, post, put and patch - required */
          url="" /*  url endpoint to be requested - required */
          data={} /* post data - optional */
          params={} /* queryString data - optional */
          config={} /* axios config - optional */
          debounce={200} /* minimum time between requests events - optional */
          debounceImmediate={true} /* make the request on the beginning or trailing end of debounce - optional */ 
          isReady={true} /* can make the axios request - optional */ 
          onSuccess={(response)=>{}} /* called on success of axios request - optional */
          onLoading={()=>{}} /* called on start of axios request - optional */
          />,
      </div>
      }
  }
