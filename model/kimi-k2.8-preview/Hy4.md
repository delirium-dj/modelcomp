- Source: Moonshot AI/Kimi K2.8 Preview
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.8 Preview
- **Short description:** Moonshot AI's 2026-09-11 preview model, positioned near flagship Kimi K3 in overall performance with improved coding/agent capability and thinking efficiency over K2.7 Code. A distinct model; Kimi K3 / K3.1 Pro and K2.7 Code are separate, and `kimi-k2.7-code-highspeed` is a deleted phantom serving-profile folder.
- **Provider / access:** Fully rolled out on **Kimi Code** (model ID `kimi-for-coding`, unchanged from K2.7 Code) and **Kimi Work**; all membership tiers get the 1M context (vs K3 requiring Allegretto+).
- **Release / knowledge:** 2026-09-11; knowledge cutoff: no verified public score found.
- **IDs:** `kimi-for-coding` (API model ID as cited). No free Zen ID verified.
- **Context window:** **1,000,000 tokens**, available on all membership tiers.
- **Modalities:** text, **image and video** in, text/code out; code completion and routine development tasks; three reasoning-effort levels **low / high / max**. No verified audio input or non-text output.
- **Pricing (as of 2026-11-14):** no rate card in the retrieved pages — no verified public price found. Subscription tiers rather than per-token pricing are documented.
- **Architecture:** Not disclosed. Official positioning: near-K3 performance with markedly better thinking efficiency than K2.7 Code.

### Raw benchmarks found

Agent / tool use:

- Kimi Work local agent: natural-language goals decomposed and executed in parallel, with tool calls, browser use and folder creation/organisation, delivering documents, spreadsheets and PPTs (product-level, not a K2.8 score)
- Thinking efficiency significantly improved over K2.7 Code (vendor claim, relative)
- **No benchmark data was published for this preview** — explicitly stated in the Baike Kimi Work article
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- "Comprehensive performance close to flagship K3" (vendor claim, directional, no numbers)
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found

Coding:

- Coding and agent capabilities "fully improved" (vendor claim, directional); positioned for code completion and routine development
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 1M-token window on all tiers; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 84/100.** Full 1M context on every tier, three effort levels, and a mature Kimi Code / Kimi Work agent product with parallel task execution; capped by zero published benchmark data for this preview.
- **Reasoning: 80/100.** Near-K3 positioning with improved thinking efficiency; capped by that being a directional vendor claim with no numeric reasoning benchmark.
- **Context window: 91/100.** A verified 1M-token window accessible on all membership tiers (a real accessibility improvement over K3); capped by no retrieval benchmark.
- **Multimodal: 85/100.** Verified image and video input — broader than the K2.x coding line; capped by text/code-only output, no verified audio input, and no multimodal benchmark.
- **Coding: 82/100.** Purpose-positioned for code completion/routine development with claimed gains over K2.7 Code; capped by no published coding benchmark score.
- **Cost efficiency: 86/100.** 1M context on all tiers without a premium upgrade and drop-in `kimi-for-coding` compatibility (no migration cost); capped by no verifiable rate card. Excluded from Overall.
- **Overall Score: 84/100.** Half-up mean of 84, 80, 91, 85, 82 = 84.4 → 84. Best fit: high-volume coding and knowledge-work agents already on Kimi Code/Work; the preview's lack of published benchmarks argues for in-house evaluation first.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Kimi Work article (release, 1M context on all tiers, three effort levels, image/video input, near-K3 positioning, and the explicit statement that **no benchmark data was published for this preview**), plus launch coverage and a secondary CSDN migration note for the `kimi-for-coding` model ID. All vendor claims are labelled directional; every raw benchmark row is honestly marked "no verified public score found" rather than estimated. Identity handling follows the project's generated roster: `kimi-k2.7-code-highspeed` is a deleted phantom folder and is never scaffolded or written. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched/retrieved this pass.
  - [Kimi Work — 百度百科 (K2.8 Preview release, specs, no-benchmark statement)](https://baike.baidu.com/item/Kimi%20Work/67899418)
  - [Kimi K2.8 Preview 全量上线 Kimi Code — 百家号 (retrieved via search excerpt; rollout, model ID)](https://baijiahao.baidu.com/s?id=1876023581539892469&wfr=spider&for=pc)
