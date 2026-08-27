import Link from "next/link";
import Icon from "./Icon";
import { policyNotice } from "@/content/policy";

export default function PolicyCard() {
  return (
    <div className="policy-card">
      <div className="policy-head">
        <h3>{policyNotice.title}</h3>
        <span className="badge-important">Important</span>
      </div>
      <div className="policy-body">
        <div className="policy-icon">
          <Icon name="noEntry" />
        </div>
        <p>
          {policyNotice.body}{" "}
          {policyNotice.effectiveDate && (
            <span className="em-date">({policyNotice.effectiveDate})</span>
          )}
        </p>
      </div>
      <Link href="/contact" className="btn btn-outline">
        Know more
      </Link>
    </div>
  );
}
