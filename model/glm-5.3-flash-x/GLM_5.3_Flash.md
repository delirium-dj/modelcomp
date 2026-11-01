# GLM 5.3 Flash X — findings by GLM 5.3 Flash

- Source: Z.ai (`zai-org/GLM-5.3-FlashX` / `opencode/glm-5.3-flash-x`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash X (vendor page "GLM-5.3-Flash/FlashX"; the high-speed serving variant of GLM-5.3-Flash — same weights, tuned serving up to ~200 tokens/s)
- **Identity caveat (read first):** a prior existence audit (my own 2026-10-30 self-excluded twin, still on disk) found no hyphenated `flash-x` vendor route — the canonical vendor ID is `z-ai/glm-5.3-flashx` — and classified FlashX as a serving-profile variant of the GLM-5.3-Flash weights. Under the serving-profile identity rule most research on those weights belongs in `model/glm-5.3-flash/`; the duplicate-spelling (`flash-x` vs `flashx`) and serving-profile questions are flagged there for user sign-off and are NOT resolved by this file. What changed today: third-party boards (ChatOSS) now publish a benchmark row under the FlashX SKU itself, so this folder's curated subject finally has its own measured citations — every figure below is labelled with the ID actually measured, and Flash-weights lineage data is marked as such.
- **Short description:** Z.ai's speed-optimized serving of the first natively multimodal GLM-5-series model: 320B-total/18B-active MoE with hybrid sparse + linear attention, aimed at low-latency streaming coding assistants; MIT open weights.
- **Provider / access:** OpenCode Zen `opencode/glm-5.3-flash-x` (OpenAI-compatible chat completions); self-hostable (MIT weights on Hugging Face `zai-org`).
- **Release / knowledge:** Flash launched 2026-08-26; the FlashX serving variant released 2026-09-18. Knowledge cutoff not published.
- **IDs:** `opencode/glm-5.3-flash-x` (Zen); `zai-org/GLM-5.3-FlashX` (open weights). (The dataset also tracks `glm-5.3-flashx/` as a separate entry; this report covers the flash-x folder's curated ID.)
- **Context window:** 1,048,576 tokens total; 131,072 max output (Zen listing + vendor docs; long-context evals ran at 300K–1M with context management).
- **Modalities:** Text, image, video, file in; text out. Reasoning (effort levels incl. max); tool calling yes; native multimodal training (first in the GLM-5 series).
- **Pricing (as of 2026-11-01):** $0.37 in / $1.25 out / $0.075 cached-read per 1M tokens (Zen); MIT weights are free to self-host.
- **Architecture:** 320B total / 18B active MoE; first open-source frontier model combining sparse and linear attention; MIT license.

### Raw benchmarks found

(Flash and FlashX share weights; vendor figures are published for the Flash/FlashX page and labelled as vendor-reported unless noted.)

Agent / tool use:

- Terminal-Bench 2.1: **84.3** (vendor chart, Claude Code 2.1.207 harness; ChatOSS lists the same 84.3 "Vals AI · Claude Code"); Vals' own-harness run **62.9** (measured — materially lower on a different harness)
- Toolathlon-Verified: **78.4** (measured, pass@1 avg of 3 runs, official eval service)
- AutomationBench v1.0.6: **48.8** (vendor; AA's AutomationBench lane **58.1** estimated)
- OSWorld 2.1: **64.8** (estimated); OSWorld 2.0 **59.1** (vendor); OSWorld-Verified **83.9** (estimated)
- AA Tau3-Banking: **47.2** (measured); Agents' Last Exam **26.3** (measured, official protocol)
- AA Agentic Index: **56.2** (estimated); GDPval-AA v2 **Elo 1773** (Artificial Analysis, vendor chart)
- Terminal-Bench 4.0: **32.8%** (ChatOSS composite; AA lane 23.2 estimated)

Reasoning / knowledge:

- HLE w/ tools: **55.3%** (vendor, full set, 163,840 max generation, GPT-5.6-luna judge); HLE w/o tools **33.8%** (estimated); AA-HLE **31.1%** (estimated)
- GPQA Diamond: **86.4%** (Vals, measured; AA lane 88.7 estimated) — vendor publishes no GPQA figure
- MMLU-Pro (Vals): **86.1%** (measured); AIME26 **95.9%** (estimated); ARC-AGI-2 **45.4%** (estimated)
- BrowseComp: **92.3%** (estimated); AA Omniscience Accuracy **34.3%** (estimated)

Coding:

- SWE-bench Verified: **92.0%** (Vals, measured, per ChatOSS composite; benchgap's AA-lane estimate 81.6%)
- DeepSWE v1.1: **63.4%** (measured, mini-swe-agent harness, 400K context)
- LiveCodeBench (Vals): **80.5%** (measured); AA Coding Index **74.1%** (estimated)
- SWE-bench Pro: **62.1%** (estimated); NL2Repo **56.3%** (measured, 1M context, rule+LLM judged)
- FrontierSWE v2: **18.1%** (measured — weak on this harness); FrontierCode 1.1 **42.1%** (estimated); Terminal-Bench Hard **49.4%** (estimated)

Long context / vision:

- OfficeQA Pro (PDF corpus agent, 512K context): **62.4%** (measured); ParseBench **70.8%** (measured)
- CharXiv Reasoning w/ tools: **89.4%** (measured); Chartography w/ tools **78.0%** (measured)
- MMVU **80.5%** (measured); MVBench **77.8%** (vendor); BabyVision **53.4%** (measured); Video-MME **90.5%** (estimated); MMMU-Pro **81.5%** (estimated); AI2D **93.5%** (estimated)
- Vision2Web **77.8%** (vendor); ScreenSpot Pro **85.5%** (estimated)

### Normalized scores (1–100)

- **Tool use: 76/100.** Vendor/ChatOSS agentic set is strong (TB2.1 84.3 on the Claude Code harness, Toolathlon 78.4 measured, GDPval 1773 Elo) but the harness spread is real — Vals' own TB2.1 run lands at 62.9 and TB4.0 at ~33; Tau3 47.2 and ALE 26.3 measured keep it off the elite tier.
- **Reasoning: 82/100.** GPQA ~86–89 (Vals measured) and MMLU-Pro 86.1 measured are high; HLE w/tools 55.3 measured is solid; ARC-AGI-2 ~45 estimated and the conflicting AAII readings cap it below the frontier-reasoning tier.
- **Context window: 88/100.** Verified 1,048,576-token window with 131K output; measured long-context agent work at 512K (OfficeQA Pro 62.4) and 1M-context coding (NL2Repo) support it.
- **Multimodal: 86/100.** First natively multimodal GLM-5 model: measured CharXiv 89.4, MMVU 80.5, ParseBench 70.8, plus strong estimated image/video boards (AI2D 93.5, Video-MME 90.5, MMMU-Pro 81.5).
- **Coding: 80/100.** Vals SWE-V 92.0 measured and DeepSWE 63.4 measured anchor a strong tier, capped by SWE-Pro ~62, weak FrontierSWE v2 (18.1 measured) and TB4.0 ~33.
- **Cost efficiency: 92/100.** $0.37/$1.25 per 1M (cached $0.075) at near-frontier capability, plus MIT weights that are free to self-host — one of the best price/performance points in the dataset.
- **Overall Score: 82/100.** Mean of the five quality dims (76+82+88+86+80)/5 = 82.4 → 82. Best fit: low-latency multimodal coding and agentic serving where cost per token matters as much as peak capability.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-01
- Method: Public internet research (Z.ai launch post and developer docs, independent benchmark boards, ChatOSS composite audit); scores are normalized 1–100 interpretations, not official vendor scores. Vendor figures are labelled as vendor-reported; independent runs (Vals, Artificial Analysis) are labelled with their source.
- Reference URLs:
  - [Z.ai — GLM-5.3-Flash/FlashX developer documentation](https://docs.z.ai/guides/vlm/glm-5.3-flash)
  - [Z.ai blog — GLM-5.3-Flash: Frontier Intelligence, Flash Cost (benchmark chart + methodology)](https://z.ai/blog/glm-5.3-flash)
  - [ChatOSS — GLM 5.3 FlashX composite audit (Vals SWE-V 92%, TB4.0 32.8%, pricing)](https://chatoss.ai/models/z-ai/glm-5.3-flashx)
  - [benchgap — GLM-5.3-Flash measured/estimated board](https://benchgap.net/model/glm-5-3-flash)
  - [CanItRun — GLM-5.3-Flash independent notes (AA GPQA 91.2, vendor-chart caveats)](https://canitrun.dev/models/glm-5.3-flash/)
  - [LM Studio — GLM-5.3-Flash model card mirror](https://www.lmstudio.ai/models/glm-5.3-flash)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
