
# 🔐 ClearForge Protocols Reference (v1)

Defines AI governance & interoperability protocols for secure, auditable collaboration.

---

## CGP — Context Governance Protocol
Governs how agents/services exchange context with RBAC/ABAC and audit trails.
Handshake packet:
```json
{
  "context_id": "ctx-98123",
  "source": "agent.research",
  "target": "agent.builder",
  "scope": "project.alpha",
  "grants": ["read","reference"],
  "expires_at": "2025-10-28T15:00:00Z"
}
```

## TTP — Trust & Transparency Protocol
Wraps AI decisions with provenance: model ID, confidence, lineage, human-review.
```json
{
  "model": "gpt-5",
  "confidence": 0.94,
  "decision": "approve_change_request",
  "reviewed_by": "human-ops-007",
  "trace_id": "t-3289abc"
}
```

## FOP — Federated Observability Protocol
Standardizes telemetry exchange across ecosystems; schema normalization, multi-tenant isolation, TLS 1.3.
```json
{
  "source": "tenant123",
  "metric": "latency_p95",
  "value": 332,
  "unit": "ms",
  "region": "us-east1"
}
```

## DIX — Data Integrity Exchange
Tokenized/anonymized data exchange between tenants or microservices.
Flow: Extract → Tokenize → Exchange → Verify → Rehydrate (policy)

## HCAF — Human-Confirmed Autonomy Framework
Defines autonomous vs collaborative vs directed modes based on confidence thresholds.
| Confidence | Mode         | Action                |
|-----------:|--------------|-----------------------|
|   > 0.90   | Autonomous   | Execute               |
| 0.70–0.90  | Collaborative| Request confirmation  |
|   < 0.70   | Directed     | Escalate to human     |
