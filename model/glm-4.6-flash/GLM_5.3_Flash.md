# GLM 4.6 Flash — findings by GLM 5.3 Flash

- Source: Z.ai (`glm-4.6-flash`, free tier)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-4.6-Flash (the free, text-only Flash variant of GLM-4.6)
- **Short description:** Z.ai's no-cost tier of the GLM-4.6 generation: flagship-adjacent text quality (tool calling, reasoning, 128K context) at literally $0 per token — the free workhorse of the GLM 4.x era, positioned for testing, prototyping and high-volume apps.
- **Provider / access:** Zhipu AI BigModel platform `glm-4.6-flash` (open.bigmodel.cn, OpenAI-compatible `/paas/v4`); served free by aggregators as `zai/glm-4.6-flash:free`; OpenCode Zen `opencode/glm-4.6-flash`.
- **Release / knowledge:** Lifespan 2025-12-08 – 2026 era on the free tier (free on BigModel per June 2026 vendor/community pricing audits); knowledge cutoff not published.
- **IDs:** `glm-4.6-flash` (Zhipu/BigModel); `zai/glm-4.6-flash:free` (OpenRouter aggregate).
- **Context window:** 131,072 (128K) documented in the GLM-4.6 family tables; several third-party client libraries map `glm-4.6*` to 200K (matching GLM-4.6's later expansion). No published retrieval benchmark either way.
- **Modalities:** Text in; text out. Tool calling and reasoning supported; no vision (the 4.6 VL family is a separate GLM-4.6V line).
- **Pricing (as of 2026-11-01):** Free tier origin ($0/$0 per 1M, Zhipu 2026-06 audits + router listings); **status note** — Z.ai's current official pricing table (checked 2026-10-19/22 by trackers) no longer lists a GLM-4.6-Flash row, the free text slots being GLM-4.5-Flash and GLM-4.7-Flash; the ID persists on aggregators. Zen meta says free ($0/$0).
- **Architecture:** Proprietary Z.ai weights (no open release for this Flash SKU Invite parameter count not disclosed).

### Raw benchmarks found

- **Zero verified public benchmark numbers exist for this exact SKU.** No vendor eval table, no independent harness row (Artificial Analysis, Vals, Epoch, board aggregators carry only the GLM-4.6 flagship or the separate GLM-4.6V vision models).
- Family context (NOT this model's scores, labelled as such): the GLM-4.6 flagship's launch board covers agents/reasoning/coding (CC-Bench 48.6% win-rate parity with Claude Sonnet 4, ~15% fewer tokens than GLM-4.5); transfer to the Flash SKU is unverified — Flash variants differ in active parameters and capability.

### Normalized scores (1–100)

- **Tool use: 55/100.** Verified capability surface (tool calling, reasoning, streaming) — scored on capability only, since no agentic benchmark row exists for this SKU.
- **Reasoning: 53/100.** Same basis: no measured figure found; scored conservatively mid-tier pending any measurement.
- **Context window: 62/100.** Verified 128K-family context (flagship expanded to 200K later; some clients map the Flash ID to 200K) but no retrieval benchmark published.
- **Multimodal: 10/100.** Text-only by design (separate GLM-4.6V line covers vision) — near the floor.
- **Coding: 55/100.** No Flash-specific coding benchmark verified; general-purpose positioning only — scored on capability surface, not harness evidence.
- **Cost efficiency: 97/100.** $0/$0 free tier, no card required on the international portal — the defining feature; one point off the floor because Z.ai's current lineup appears to have consolidated the free text slots, and concurrency/account limits apply.
- **Overall Score: 47/100.** Mean of the five quality dims (55+53+62+10+55)/5 = 47.0 → 47. Best fit: free unlimited prototyping and high-volume text automation where $0 matters more than verified peaks.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-01
- Method: Public internet research (Z.ai/BigModel pricing tables and audits, free-tier trackers, third-party provider catalogues, SDK source code); scores are normalized 1–100 interpretations, not official vendor scores. The absence of any published benchmark for this SKU is stated as a finding, never backfilled with flagship-family numbers.
- Reference URLs:
  - [Z.ai docs — official pricing table (free text SKUs listed; no GLM-4.6-Flash row currently)](https://docs.z.ai/guides/overview/pricing.md)
  - [Z.ai blog — GLM-4.6 launch (family capability context, CC-Bench)](https://z.ai/blog/glm-4.6)
  - [itsfree.ai — Z.ai/Zhipu free tier reference (Flash line = permanent free tier, limits)](https://itsfree.ai/provider/zai/)
  - [51CTO — CN model pricing audit, June 2026 (GLM-4.6-Flash free row)](https://blog.51cto.com/u_15179319/14845739)
  - [Crazyrouter — GLM-4.6 variant table (Flash tier at 128K context)](https://crazyrouter.com/en/blog/glm-4-6-api-guide-zhipu-ai)
  - [DEV.to — GLM-4.6 Flash free pricing guide (2026)](https://dev.to/aiwave/glm-5-glm-46-api-complete-guide-pricing-tutorial-best-practices-2026-o3g)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
