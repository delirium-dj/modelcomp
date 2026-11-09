# Ling 3.2 Flash — findings by Qwen 3.8 Max

- Source: Ant Ling / Ant Group inclusionAI (`opencode/ling-3.2-flash`; Ant Ling API, OpenAI/Anthropic-compatible)
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-3.2-flash (Ling 3.2 Flash)
- **Short description:** Ant Group's (inclusionAI) first native-multimodal Ling model — a 560B-total / 25B-active MoE released 2026-11-05 that folds image and video input into the same body as Ling-3.1-flash, targeting complex visual understanding, multimodal long-horizon agents, 3D understanding/interaction, and medical multimodal work.
- **Provider / access:** Ant Ling endpoint (`developer.ant-ling.com`), OpenAI- and Anthropic-SDK-compatible; also on OpenCode Zen `opencode/ling-3.2-flash` (no Free ID — `noFreeId: true`); Ant Bailian. Runs in Claude Code, Kilo Code, Qwen Code and Hermes Agent via compatible endpoints. Open weights: earlier Ling Flash models shipped on Hugging Face (inclusionAI); 3.2 weights not yet confirmed public.
- **Release / knowledge:** Released 2026-11-05; knowledge cutoff not published.
- **IDs:** `opencode/ling-3.2-flash` (Zen, no Free ID); Ant Ling / Ant Bailian API ID. No standing $0 tier — only a launch free trial.
- **Context window:** 1,000,000 tokens (1M), native; vendor states "long-range information retrieval without noticeable degradation" (beginning/middle/end), but no MRCR/RULER retrieval number is published.
- **Modalities:** Text, image and VIDEO input (native — fused at the architecture level, no external vision module); text output. Reasoning yes (hybrid reasoning MoE, Ling 3.1 lineage). Tool calling yes (agentic harness support; multimodal long-horizon Agent is a headline capability). No audio input; no non-text output.
- **Pricing (as of 2026-11-09):** $0.30 per 1M input / $0.90 per 1M output (Ant Bailian launch pricing); free for the first two weeks after launch (time-limited trial, NOT a standing free tier).
- **Architecture:** Native-multimodal MoE, 560B total / 25B active per token; hybrid-linear attention (KDA — Kimi Delta Attention, per the Ling 3.0 lineage). Same 560B/25B body as Ling-3.1-flash with native vision added.

### Raw benchmarks found

> Only THREE numeric benchmarks are public, all from **Ant's own release evaluations** (vendor-self-reported, not independent), and all multimodal/vision. Artificial Analysis: **not tracked (404)**. BenchLM: **not tracked (404)**. Sumus (read 2026-11-07): "There are no independent Ling-3.2 scores yet, so treat the table as a direction, not a final rank." Text-reasoning, coding-agent and tool-use benchmarks are **not yet publicly verified** (confirmed by `meta.json` tradeoff).

Reasoning / knowledge (multimodal proxies only):

- ZEROBench Sub (hard visual puzzles): **43.71** vs Claude Opus 5 (max) 39.52 — Ant release eval.
- OmniDocBench (complex document understanding): **92.21** vs Claude Opus 5 (max) 90.56 — Ant release eval.
- GPQA Diamond / HLE / MMLU / AIME / MRCR / LCR / CritPt / AA Intelligence Index: **no verified public score found** (text reasoning unverified; AA 404).

Coding:

- Vision2Web (screenshot/design → responsive web page): **85.86** vs Claude Opus 5 (max) 80.20 — Ant release eval.
- Qualitative: "reads research PDFs with equations and diagrams and implements the algorithm in working code"; turns engineering drawings into 3D web models; operates Blender through UI actions.
- SWE-bench Verified / LiveCodeBench / HumanEval / SciCode / Terminal-Bench / DeepSWE: **no verified public score found** (coding-agent unverified).

Agent / tool use:

- Terminal-Bench / Tau-Bench / BFCL / GDPval-AA / Toolathon / MCP-Atlas: **no verified public score found**. Positioning only: "multimodal long-horizon Agent … maintains goal alignment across multi-step tasks"; integrates with Claude Code / Kilo / Qwen Code / Hermes. The Ling-3.0/3.1 lineage reports "stable tool calling" and "high completion rates across multi-step planning, tool-chain invocation," but those are predecessor numbers, not 3.2-specific.

Multimodal (vision):

- OmniDocBench **92.21**, Vision2Web **85.86**, ZEROBench Sub **43.71** (all > Claude Opus 5 max) — native image + video + 3D + medical multimodal. Strongest verified dimension.

Long context:

- 1,000,000-token native window; vendor claims retrieval "without noticeable degradation," but **no MRCR / RULER / GraphWalks number reported**.

> Provenance & meta verification:
> - `model/ling-3.2-flash/meta.json` is ACCURATE and well-curated (not a stub): 560B/25B MoE, 1M context, "Text, image and video in; text out", $0.30/$0.90, `noFreeId: true`, and a correct tradeoff note ("Text reasoning, coding-agent and tool-use benchmarks are not yet publicly verified"). No premise-correction needed — the fresh Ant Ling docs + launch coverage corroborate every field.
> - Benchmark caveat: all three numbers are vendor-self-reported Ant release evals with no independent reproduction; they cover ONLY multimodal/vision. Text reasoning, tool use and general coding have zero verified 3.2-specific numbers, so those dimensions are scored conservatively on lineage + positioning, never invented.

### Normalized scores (1–100)

- **Tool use: 62/100.** No 3.2-specific verified tool benchmark exists (no BFCL/Tau/Terminal-Bench/GDPval); scored on the "multimodal long-horizon Agent" positioning, agentic-harness integration (Claude Code/Kilo/Qwen Code/Hermes), Blender-UI operation demos, and the Ling-3.0/3.1 "stable tool calling" lineage — capped in the low-60s by the total absence of verified 3.2 tool numbers.
- **Reasoning: 68/100.** Strong verified multimodal reasoning — ZEROBench Sub 43.71 and OmniDocBench 92.21 both beat Claude Opus 5 (max) — on a 560B/25B hybrid-reasoning MoE body; capped below 70 because there is NO verified text-reasoning benchmark (GPQA/HLE/MMLU/Intelligence Index all absent; AA 404).
- **Context window: 90/100.** 1,000,000-token native window with a vendor "no noticeable degradation" retrieval claim; scored at the 1M tier but held at 90 (not 95+) because no MRCR/RULER retrieval percentage is published to justify the top of the band.
- **Multimodal: 85/100.** Native text + image + video input (architecture-level fusion, no external vision module) plus 3D and medical focus; beats Claude Opus 5 (max) on OmniDocBench (92.21), Vision2Web (85.86) and ZEROBench Sub (43.71) — the "+video in" band (75–90), near the top; capped by no audio input, text-only output, and vendor-self-reported numbers.
- **Coding: 66/100.** Vision2Web 85.86 (> Opus 5's 80.20) is a real, strong front-end/visual-coding result, plus "documents into code" (implementing algorithms from PDFs) and the Ling-3.1 "aimed at text coding" body; capped in the mid-60s because no SWE-bench Verified / LiveCodeBench / SciCode / Terminal-Bench is published (coding-agent explicitly unverified).
- **Cost efficiency: 94/100.** $0.30 in / $0.90 out per 1M is aggressive for a 560B/1M native-multimodal MoE (cheaper than the ~$0.60/$2.20 ≈ 92 rubric anchor); the two-week launch free window is time-limited, not a standing $0 tier, so not 100.
- **Overall Score: 74/100.** Half-up mean of the five quality dims (62 + 68 + 90 + 85 + 66) / 5 = 74.2 → 74. **Divergence +3.7 vs the 2-rater cohort (70.3):** my read gives fuller credit to the verified multimodal strength (three Opus-5-beating vision benchmarks) and the 1M native window, while both reads discount the unverified text-reasoning/tool/coding-agent areas. Best fit: a cheap, very-long-context native-multimodal agent for document→code, vision-to-web, 3D and medical-image work — but validate text reasoning, tool reliability and general software-engineering coding yourself, since none are independently benchmarked yet.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-11-09
- Method: public internet research (official Ant Ling model docs + launch coverage + vendor release-eval benchmark table via Sumus); scores are normalized 1–100 interpretations, not official vendor scores. Only three vendor-self-reported multimodal benchmarks exist; text-reasoning, tool-use and general-coding dimensions are scored conservatively on lineage + positioning and are explicitly capped by the absence of verified numbers (never invented).
- Reference URLs:
  - [Ant Ling — official Ling model docs (Ling-3.2-flash specs, 560B/25B, 1M, native multimodal, capability areas)](https://developer.ant-ling.com/en/docs/models/ling/)
  - [Ant Ling — "Ling-3.2-flash: Native Multimodal Text Model Now Live" (announcement, 2026-11-05)](https://www.ant-ling.com/en/)
  - [Sumus — Ling 3.2 Flash: Ant's 560B Multimodal Model, Price & Benchmarks (OmniDocBench/Vision2Web/ZEROBench vs Opus 5; pricing)](https://sumus.im/blog/ling-3-2-flash)
  - [Ant Ling on X — Ling-3.2-flash launch thread](https://x.com/AntLingAGI/status/2118428246664761379)
  - [AICoder — Ant Ling Launches Ling-3.2-flash: 560B/25B Native Multimodal, 1M, Free 2 Weeks](https://aicoder.com/news/news-20261105-ant-ling-ling-3-2-flash-560b-a25b-native-multimodal-1m-free-2-weeks)
- Future sources: independent reproductions (Artificial Analysis / BenchLM entries), open Ling-3.2 weights on Hugging Face, or published text-reasoning / SWE-bench / tool-use numbers would let a future pass lift Reasoning, Tool use and Coding; add a new file beside this one using the same headings.
