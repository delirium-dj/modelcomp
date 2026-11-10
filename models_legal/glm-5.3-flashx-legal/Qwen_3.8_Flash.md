# GLM 5.3 FlashX Legal — findings by Qwen 3.8 Flash

- Source: Z.ai (`zai/glm-5.3-flashx-legal`) — legal mirror tree
- Date: 2026‑11‑10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 FlashX Legal (a.k.a. **GLM-Legal**; model code `glm-5.3-flashx-legal`)
- **Short description:** Z.ai's **legal-domain SKU of GLM-5.3-FlashX** — the Flash/FlashX foundation with legal mid-training + workflow-style RL for **document understanding, legal reasoning, contract review and drafting**. Runs as an agent hooked to legal MCP services (laws, cases, company data) plus Word/WPS revision tools. Mandatory thinking; function calling; structured JSON output; streaming.
- **Provider / access:** Z.ai API (some enterprise access described as **application-gated**) and OpenRouter public route (`z-ai/glm-5.3-flashx-legal`). Not a free public chatbot.
- **Release / knowledge:** OpenRouter model card release **2026‑11‑02**; Z.ai GLM-Legal blog 2026‑10‑12.
- **IDs:** `glm-5.3-flashx-legal` (Z.ai / OpenRouter); `zai/glm-5.3-flashx-legal` (meta).
- **Context window:** **1,048,576 tokens (≈1M)**; curated meta lists 128K max output. Multimodal long-doc intake is the headline.
- **Modalities:** **text, image, video in → text out.**
- **Pricing:** **$0.37 / $1.25 per 1M in/out; $0.075/M cached input** (Z.ai pricing page; OpenRouter mirrors — same band as base FlashX).

### Raw benchmarks found

> **Provenance caveat:** the published legal scores are **vendor-stated** (Z.ai). No independent harness reproduction found for the exact Legal ID as of this date. Standard general suites (GPQA/HLE/SWE-bench/τ-bench) are **not published for this exact SKU** and must not be imported from base FlashX as a lineage proxy.

Agentic legal (vendor-stated, Z.ai):

- **Harvey LAB: 19.2 % all-pass**, **+12.5 pp over the base model** — Z.ai claims open-source SOTA on that eval. Harvey LAB is a hallucination-gated all-pass metric (a run counts only if *every* sub-task passes with no hallucination), so 19.2 % all-pass is a meaningful, hard-metric number, not a low score.
- **LegalBench** and **PLawBench** results cited for specialized / Chinese-localized practice — vendor-stated, not reproduced here.

Reasoning / coding / general:

- No exact-ID GPQA / HLE / AA Intelligence Index / SWE-bench row published for the Legal SKU (base FlashX figures exist but are lineage, not measured here).

### Normalized scores (1–100)

> Scored **provisionally** as a domain specialist: Context and Multimodal are **spec-verified** (vendor docs + OpenRouter, independent of the score claims); Tool/Reasoning/Coding lean on the vendor-stated legal eval and are flagged. Overall = half-up mean of five quality dims, Cost excluded.

- **Tool use: 65/100.** Built for multi-step agentic legal workflows (Harvey LAB all-pass harness, legal MCP tool-calling, structured output, revision loops). Harvey LAB 19.2 % all-pass is respectable on a strict metric; +12.5 pp over base evidences the domain lift. Vendor-stated → provisional ceiling at 65.
- **Reasoning: 68/100.** Strong **domain** legal reasoning (LegalBench / PLawBench cited, mandatory max-effort thinking), but no exact-ID general closed-book row; capped for un-reproduced vendor provenance.
- **Context window: 95/100.** **Verified 1M tokens** — top band (≥1M = 95–100). Held at 95 (not 100) absent an independent ≥512K retrieval score.
- **Multimodal: 78/100.** **Spec-verified text+image+video in → text out** — the "+video/PDF in" band is 75–90. Suits large document packs. Capped mid-band; no non-text output.
- **Coding: 45/100.** Not a coding SKU; curated meta tradeoff explicitly notes "narrower general utility than general-domain FlashX." No exact-ID coding benchmark → conservative.
- **Cost efficiency: 88/100.** $0.37/$1.25 with $0.075 cache is a value mid-tier, same band as FlashX. Excluded from Overall.
- **Overall Score: 70/100.** Mean of Tool 65, Reasoning 68, Context 95, Multimodal 78, Coding 45 = 351/5 = 70.2 → **70**. Best fit: **long-context multimodal legal document review, cross-checking and first-pass drafting inside an MCP-agent stack**, counsel-in-the-loop. Not a general assistant and not a coder.

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026‑11‑10
- Method: ≥3 qualifying acquisitions (Z.ai GLM-Legal blog, OpenRouter model card `z-ai/glm-5.3-flashx-legal`, MyClaw/GLM-5.3-FlashX-Legal review citing Z.ai pricing + Harvey LAB, activepieces launch specs). **Noted: this folder is the real home of the slug I earlier flagged as a phantom `glm-5.3-flashx-legal` queue line — it lives in the legal mirror tree, not `model/`, which is why `pnpm sync` (scans `model/` only) never lists it. No action needed.** Scored on the exact-ID legal row (Harvey LAB 19.2 % all-pass, +12.5 pp) + **vendor-verified specs** (1M ctx, image/video in, $0.37/$1.25). Flagged on record: (a) **legal scores are vendor-stated, not independently reproduced** — Tool/Reasoning provisional; (b) **no general-dimension exact-ID rows** exist for the Legal SKU — did not import base FlashX figures; (c) access may be application-gated.
- Revisit trigger: an independent harness publishes Harvey LAB / LegalBench / GPQA rows for `glm-5.3-flashx-legal`.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8.md`, using the same headings.
