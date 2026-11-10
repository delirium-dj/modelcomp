# GPT-5.6 Cyber — findings by Qwen 3.8 Flash

- Source: OpenAI (`opencode/gpt-5.6-cyber`) — cybersecurity mirror tree
- Date: 2026‑11‑10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Cyber
- **Short description:** OpenAI's **specialized cybersecurity model for authorized security research**, offered through the **Daybreak Red** access tier (advanced vulnerability research / penetration testing) — not a general chat SKU. It investigates suspected vulnerabilities, validates impact in sandboxed ranges, and produces evidence/candidate patches for maintainers. OpenAI classified it **High** for cybersecurity under the Preparedness Framework (superseded in capability by GPT‑6 Cyber = Critical).
- **Provider / access:** OpenAI, gated. Requires OpenAI model approval **on top of** Daybreak Red, asset-owner authorization, allowlisted outbound IP; embed-in-product needs separate approval. **Not generally available.**
- **Release / knowledge:** Launched ~2026‑08‑11 (The Hacker News); the OpenAI August‑2026 safety update and The Verge launch coverage carry its eval rows.
- **IDs:** `opencode/gpt-5.6-cyber` (meta).
- **Context window:** **UNVERIFIED** — curated `meta.json` is a **scaffolded stub** ("128K total", "Standard pricing", `scaffolded: true`). Treat context/pricing below as placeholder, not vendor-confirmed for this exact ID.
- **Modalities:** text in / text out (per stub; no verified vision/audio for this SKU).
- **Pricing:** **not published for this exact ID** (Daybreak is enterprise/approval-gated). Cost cannot be scored.

### Raw benchmarks found (exact-ID)

> Specialist security SKU — standard generative suites (GPQA, HLE, SWE-bench, Terminal-Bench, τ-bench, AA Intelligence Index) have **no public exact-ID rows** for `gpt-5.6-cyber`; they belong to the general GPT‑5.6 family, not this gated variant, and must not be imported as a lineage proxy.

Cyber capability (OpenAI, via The Verge / Floatboat launch coverage):

- **ExploitGym (vulnerability exploitation): 32.1 %** task success — vs GPT‑6 Astra 42.4 %, GPT‑6 Cyber 48.5 %. The frontier-hard exploit benchmark; 32.1 % is a strong showing for the prior generation.
- **ExploitGym HoneyPot (scope adherence):** **~5 %** out-of-bounds behavior (vs <1 % for GPT‑6 Cyber) — it pushes boundaries more often than the newer model.
- **The Hacker News:** OpenAI reports GPT‑5.6‑Cyber **completes ~95 % of advanced cyber requests and finds zero‑day flaws** (reduced-safeguard Red posture).
- **Linux kernel pipeline (attributed to GPT‑6 Cyber by Reuters):** examine 2,308 candidates → reproduce 1,724 vulns → 948 distinct flaws with demonstrated local privilege escalation — cited here as the **family trajectory**, not a GPT‑5.6‑Cyber-measured row.

### Normalized scores (1–100)

> Scored **provisionally** — this is an access-gated **domain specialist**, not a general LLM; most general dimensions have **no exact-ID public number**, and the curated meta is a scaffolded stub. Only the cyber rows above are evidence-anchored; other dims are honest provisional placeholders (Fledge-style "zero verified tool/coding benchmarks" treatment), not measured capability. Overall = half-up mean of five quality dims, Cost excluded.

- **Tool use: 55/100.** Operates as an agentic security tool inside a sandboxed harness (ExploitGym = autonomous exploit workflow; reproduces vulns, prepares patches). Real tool-surface strength for the niche, but no general agentic row (τ / GDPval / Terminal-Bench) exists for the exact ID — 32.1 % ExploitGym caps confidence at mid.
- **Reasoning: 60/100.** Deep vulnerability/root-cause reasoning is evidenced (finds zero-days, High cyber classification), but **no closed-book general reasoning benchmark** (GPQA/HLE/Index) is published for this SKU. Provisional, anchored to cyber-reasoning performance only.
- **Context window: 55/100.** Scaffolded stub says 128K (→ 100K–200K band 50–64) but is **unverified** for this ID. Provisional mid; re-check against the real model card.
- **Multimodal: 15/100.** Text-centric security tool per stub; no verified image/audio/video intake for `gpt-5.6-cyber`. Scored at the text-only floor.
- **Coding: 66/100.** Exploit development, code analysis and patch authoring are core to its job (evidence for maintainers), demonstrating strong security-code capability — but **no SWE-bench/DeepSWE exact-ID row** exists, so this is evidence-informed provisional, not a measured coding score.
- **Cost efficiency: not scorable.** Access-gated Daybreak Red; no published per-1M price for the exact ID (GPT‑6 Cyber = $20/$2/$100; GPT‑5.6‑Cyber unconfirmed). Excluded from Overall regardless.
- **Overall Score: 50/100.** Mean of Tool 55, Reasoning 60, Context 55, Multimodal 15, Coding 66 = 251/5 = 50.2 → **50**. Honest read: a **high-capability specialist whose general-rubric fit is poor and whose public exact-ID evidence is narrow (cyber only)**. The 50 is **provisional** — expect it to move once (a) the scaffolded stub is replaced with verified specs and (b) any general-dimension exact-ID rows are published. Do not read it as a general-model ranking.

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026‑11‑10
- Method: ≥3 qualifying acquisitions (OpenAI "Introducing GPT‑6 Cyber" + August‑2026 deployment-safety update via search, The Hacker News launch report, Floatboat launch summary carrying OpenAI's The Verge briefing). Scored **only on exact-ID cyber rows** (ExploitGym 32.1 %, HoneyPot ~5 % OOB, High Preparedness class, ~95 % advanced-request completion). **Explicitly did NOT** import general GPT‑5.6 family scores as a lineage proxy. Flagged on record: (a) curated `meta.json` is a **scaffolded stub** — 128K/"Standard pricing"/text-only are placeholders, not vendor-confirmed; (b) access-gated (Daybreak Red), **not generally available**; (c) general-reasoning/context/coding dims are **provisional** with no exact-ID measurement; (d) superseded in-family by GPT‑6 Cyber (Critical, ExploitGym 48.5 %). This is a specialist poor-fit score, not a fair general-LLM ranking.
- Revisit trigger: OpenAI publishes a real GPT‑5.6‑Cyber model card (verified context/pricing/modalities) or any general-dimension exact-ID benchmark row; replace the scaffolded stub meta with verified specs.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8.md`, using the same headings.
