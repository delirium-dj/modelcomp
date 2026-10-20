# Qwen 3.5 Flash — findings by Qwen 3.8 Flash

- Source: Alibaba Qwen hosted tier (`qwen/qwen3.5-flash-02-23`; curated id `opencode/qwen-3.5-flash`), cross-checked against OpenRouter, the Qwen3.5 blog, llmapi.ai / designforonline listings and llm-stats
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Flash
- **Short description:** The **fast, cheap hosted lane** of Alibaba's Qwen3.5 "Native Multimodal Agents" family — a production-oriented tier on Alibaba Cloud Model Studio (and OpenRouter), not an open-weight checkpoint. Its whole point is **throughput economics**: a full **1M-token window**, native-vision multimodal input and function calling at pennies per million tokens, for high-volume agentic/chat workloads where the flagship 397B/Plus tiers are overkill. **Hosted-only and already superseded** by the Qwen 3.6 / 3.7 Flash tiers.
- **Provider / access:** Alibaba Cloud Model Studio + OpenRouter (`qwen/qwen3.5-flash-02-23`); **no open weights**; a live route with substantial observed usage.
- **Release / knowledge:** snapshot id `02-23` (≈ 2026-02-23, alongside the Qwen3.5 wave); knowledge cutoff not separately published for the hosted tier.
- **IDs:** `qwen3.5-flash-02-23`; hosted sibling `qwen-3.5-plus` (1M ctx, built-in tools); open-weight siblings `qwen-3.5-397b`, `qwen-3.5-122b-a10b`, `qwen-3.5-35b-a3b`, `qwen-3.5-27b`, `qwen-3.5-9b`; **superseded by `qwen-3.6-flash` / `qwen-3.7-flash`**.
- **Context window:** **1,000,000 tokens** (OpenRouter-confirmed) / **65,536 max output** — a genuine 1M window, not an extension claim.
- **Modalities:** **multimodal (native-vision)** input — text + image (OpenRouter/family card describe image, some rows note video), text out; reasoning yes; **function/tool calling yes**. *(The curated meta flags "vision support unverified"; third-party OpenRouter copy affirms native vision — treated as present-but-thinly-evidenced.)*
- **Pricing (as of 2026-10-20):** **$0.065/M input, $0.26/M output** (OpenRouter) — one of the cheapest 1M-context multimodal-agent tiers anywhere.
- **Architecture:** proprietary hosted tier of the Qwen3.5 MoE family (the open checkpoints are the public face; the Flash route is served/optimized by Alibaba).

### Raw benchmarks found

> **Evidence-vacuum entry:** this hosted endpoint has **no model-specific benchmark absolutes published.** designforonline states it plainly ("no model-specific benchmarks are provided"). The Qwen3.5 *family* flagship numbers — **76.4% SWE-bench Verified, 88.4% GPQA Diamond, 62.2% OSWorld-Verified** on Alibaba's own harness (aireleasetracker) — belong to the **397B/Plus class, NOT the Flash tier**, and are reproduced here only as an *upper-family ceiling*, explicitly not attributed to this endpoint. Scores below are therefore inferred from confirmed **specs** (1M ctx, native vision, tool calling, cost) and the family's agent-first design, discounted hard for the missing per-endpoint proof.

Agent / tool use:

- Function/tool calling: **confirmed present** on the hosted route (OpenRouter/designforonline); **no τ²-bench / BFCL / OSWorld absolute published for this exact Flash endpoint.**

Reasoning / knowledge:

- GPQA Diamond / HLE / MMLU-Pro: **no endpoint-specific absolute** (family-flagship GPQA 88.4 is *not* this tier). A "Flash" lane is by construction a step below the flagship on depth.

Coding:

- SWE-bench Verified / LiveCodeBench: **no endpoint-specific absolute** (family-flagship 76.4 SWE-V is the 397B class).

Long context / multimodal:

- **1M window is spec-verified** (OpenRouter); **no MRCR/RULER retrieval score** published for the tier; native-vision/multimodal claimed but vision support flagged *unverified* in curated meta and **no MMMU/video benchmark** for this endpoint.

### Normalized scores (1–100)

- **Tool use: 62/100.** Function calling is confirmed and the whole Qwen3.5 line is trained "native multimodal agents"-first, but there is *zero* per-endpoint agentic benchmark (τ²/BFCL/OSWorld) for this Flash tier, so tool-calling strength is credited at spec-level only — solid, unevidenced.
- **Reasoning: 58/100.** A deliberately lightweight, speed/cost-first lane with no published GPQA/HLE for this endpoint and a capability step below the flagship family numbers — scored as competent-general, not deep, with the gap acknowledged.
- **Context window: 84/100.** The one genuinely **verified** strength: a full **1,000,000-token** native window at 65K output, spec-confirmed by OpenRouter (not an unproven extension); held under the 88s only because no long-context retrieval score is published.
- **Multimodal: 58/100.** Native-vision (image, some video) input per the OpenRouter/family card is real and puts it above text-only peers, but the curated meta's "vision support unverified" caveat and the total absence of a vision benchmark for this endpoint keep it modest.
- **Coding: 54/100.** A fast generalist tier, not a coding specialist: no endpoint SWE-bench/LiveCodeBench number exists and the family's strong coding scores are flagship-only — scored functional rather than proven.
- **Cost efficiency: 96/100.** $0.065/$0.26 per 1M for a **1M-context multimodal agent** with tool calling is near the floor of the entire registry — the singular, unambiguous reason to pick this lane.
- **Overall Score: 63.2/100.** Half-up mean of the five quality dims (62+58+84+58+54)/5 = 63.2. Best fit: **very-high-volume, cost-sensitive multimodal + tool-using chat/agent traffic over long contexts**, where a verified 1M window and rock-bottom pricing outweigh the (unpublished, and by-design-lower) reasoning/coding depth. Because capability is inferred from specs and family design rather than endpoint benchmarks, this score should be revisited the moment a Flash-specific number lands.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-20
- Method: public internet research — OpenRouter `qwen/qwen3.5-flash-02-23` (1,000,000-token context, $0.065/$0.26 per 1M, native-vision multimodal, function calling), the Qwen3.5 blog / aireleasetracker (family flagship 76.4 SWE-V / 88.4 GPQA-D / 62.2 OSWorld — reproduced *only* as an upper-family ceiling, explicitly not attributed to the Flash endpoint), llmapi.ai (hosted production tier, text + vision-language), and designforonline ("no model-specific benchmarks are provided"). Scores are normalized 1–100 interpretations from **confirmed specs**, not official vendor scores; every benchmark-dependent dimension is discounted for the per-endpoint evidence vacuum rather than filled with the flagship's numbers. Curated `meta.json` is not scaffolded and largely agrees (1M/65K, hosted-only, ~$0.065/$0.26, superseded); the only open question — "vision support unverified" — is carried into the Multimodal score as a caveat.
- Revisit trigger: an Artificial Analysis / OpenRouter benchmark row **specific to the qwen3.5-flash endpoint** (GPQA/SWE/τ²/MMMU), or confirmation of its native-vision capability; note the 3.6/3.7 Flash tiers now supersede it.
- Future sources: add a new file next to this one, e.g. `GLM_5.3.md`, using the same headings.
