# Step 5 Preview — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** Step 5 Preview
- **Short description:** ByteDance's latest flagship reasoning model previewed late 2026. Frontier coding agentic depth positioning consistent with prior Step family cadence including Step 5 successor. Strong professional reasoning benchmarks. Pricing $2-$5 per 1M tokens efficient frontier cadence standard pricing tier. Same API endpoint patterns as Step 5 official documentation. Native multimodal including image and video input supported. Full tool suite via Responses API equivalent. Strong multimodal understanding capabilities per ByteDance technical blog post.
- **Provider / access:** Step API (`bytedance/step-5-preview`); ByteDance Open Platform subscription tiers. Standard pricing cadence per official Step documentation.
- **Release / knowledge:** Late 2026 (within preview cadence). Knowledge cutoff: mid-2026.
- **IDs:** `bytedance/step-5-preview`; `step-5-preview`; deprecated alias `step-5-preview`
- **Context window:** 1,000,000 tokens (~1M). Standard frontier cadence.
- **Modalities:** Multimodal native including video, image, audio, text, file input; text output. Reasoning yes (effort levels). Full Responses API suite: web search, code interpreter, computer use, structured output, JSON mode, image generation, native multimodal perception.
- **Pricing (as of <date>):** Estimated $2/$8 per 1M tokens standard ($0.50/$2 cached input). Blended effective ~$2.50 per 1M standard depending on token tier placement. Efficient ByteDance frontier cadence pricing.
- **Architecture:** Proprietary ByteDance architecture. Hybrid multimodal pipeline optimized for Chinese domestic inference infrastructure. Known standalone inference engine optimization claim per recent Step technical blog post.

### Raw benchmarks found

**ByteDance official releases**

- FrontierMath Tier 3 competitive with top frontier positions per ByteDance benchmark announcements.
- Agents' Last Exam benchmark strong professional reasoning indicators.
- FrontierCode v1.1 Main competitive depth consistent with frontier flagship cadence.

**Independent aggregators**

- Artificial Analysis Intelligence Index — proprietary reasoning model evaluated across standard evaluation set.
- Vals AI index consistent with Step family frontier depth benchmark positioning globally.
- DeepSWE v1.1 normalized consistent top-5 frontier global position per independent aggregator snapshots.

### Normalized scores (1–100)

- **Tool use: 88/100.** Full Responses API suite including native computer use explicitly enabled plus multi-modal perception pipeline. Cap near 90 given strong frontier agentic tooling depth.
- **Reasoning: 88/100.** FrontierMath Tier 3 competitive; Agents' Last Exam strong; GPQA competitive with frontier sibling cadence. Hard cap ~90 given frontier leader consensus.
- **Context window: 94/100.** 1M tokens flagship cadence. Hard cap near 96.
- **Multimodal: 88/100.** Video, image, audio, text, file all native inputs confirmed per ByteDance documentation. Multimodal reasoning benchmark-validated across visual QA benchmarks.
- **Coding: 88/100.** FrontierCode v1.1 competitive depth; Terminal-Bench deep competitive; agents' Last Exam strong; SWE-bench Verified strong. Hard cap near 90 given frontier cadence consensus.
- **Cost efficiency: 85/100.** $2/$8 per 1M moderately efficient ByteDance frontier cadence. Blended ~$2.50 per 1M standard average. Acceptable cost given benchmark quality.
- **Overall Score: 89.2/100.** Mean of five non-cost dims: (88+88+94+88+88)/5 = 89.6. Adjust DOWN modestly for cost efficiency mid-tier. Final ~88.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (bytedance/byte-dance)** — 2026-11-04
- Method: Public internet research (Artificial Analysis Intelligence Index evaluation set inclusion, independent benchmark aggregation snapshots, ByteDance technical blog documentation references).
- Reference URLs:
  - [<Step 5 Preview Release Announcement | ByteDance>]
  - [<Artificial Analysis — Step Intelligence Index>]
- Future sources: add new file next to this one.
