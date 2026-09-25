# ByteDance Seed 2.0 Pro — findings by Space Bunny Alpha

- Source: ByteDance Seed 2.0 Pro (`ByteDance/Seed-2.0-pro`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** ByteDance Seed 2.0 Pro
- **Short description:** ByteDance Seed's flagship proprietary, multimodal reasoning and agent model, positioned for long-horizon workflows, search, coding, and visual reasoning. It is distinct from Seed 2.0 Lite, Mini, and the code-focused Seed 2.0 Code.
- **Provider / access:** ByteDance Volcengine / Ark ModelArk; international metadata is also served by DeepInfra as `deepinfra/ByteDance/Seed-2.0-pro` (OpenAI-compatible API). The model card does not publish a single universal public API URL.
- **Release / knowledge:** 2026-02-14 (models.dev record; the official card cites a 2026-02-16 leaderboard snapshot). LLM Stats reports January 2024 as its knowledge cutoff; no official cutoff was found in the model card, so this is third-party metadata.
- **IDs:** `ByteDance/Seed-2.0-pro` (models.dev); `deepinfra/ByteDance/Seed-2.0-pro` (DeepInfra route).
- **Context window:** 256,000 total tokens with a 128,000-token output limit on the models.dev/DeepInfra record. LLM Stats lists 256K input / 131,072 output for the same hosted route; the discrepancy is preserved rather than treated as a measured limit.
- **Modalities:** Text and image input on the DeepInfra API record; the official card also reports extensive video understanding. Text output; mandatory internal reasoning; tool calling and structured output are supported by the models.dev record. PDF/file and audio support were not verified.
- **Pricing (as of 2026-09-25):** DeepInfra lists $0.50/M input, $0.10/M cached input, and $3/M output; prompts above 128K rise to $1/M input and $6/M output. The official card lists representative ByteDance pricing of $0.47/M input and $2.37/M output, with modality/context ranges. Paid model; account limits and route terms apply.
- **Architecture:** Proprietary; parameter count and checkpoint details were not published. The official card positions Pro as the largest/highest-capability member of the Seed 2.0 family, but does not publish a parameter total or MoE configuration.

### Raw benchmarks found

All primary scores below are from ByteDance's official [Seed 2.0 Model Card](https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf), which says evaluations use each benchmark's official protocol unless stated. Unless tools are named, evaluations are without external tools. The card says Terminal-Bench 2.0 excludes three environment-incompatible cases and adapts the remaining tasks to ByteDance's internal agent framework. These are vendor-reported model results, not independent reruns.

Agent / tool use:

- Terminal-Bench 2.0 / Terminus2: **3.0%** (official card, Table 11).
- SWE-Lancer: **55.8%**; Multi-SWE-Bench: **76.5%**; SWE-Bench Pro: **45.2%**; SWE Multilingual: **46.9%** (official card, Table 11).
- Scicode: **71.7%**; SWE-Evo: **48.5%**; Aider Polyglot: **8.5%**; ArtifactsBench: **80.0%**; SpreadsheetBench Verified: **58.0%** (official card, Table 11).
- Search agents: BrowseComp **94.2%**; BrowseComp-zh **79.1%**; HLE-text **58.4%**; HLE-Verified **77.3%**; WideSearch **70.8%**; FinSearchComp **82.4%**; DeepSearchQA **54.2%**; Seal-0 **73.6%** (official card, Table 11).
- Tool/function calling: 2-Bench retail **46.9%**, telecom **74.7%**; MCP-Mark **70.2%**; BFCL-v4 **52.7%** (official card, Table 11).
- GDPval-AA: no verified public score found. The official card instead reports an internal GDPVal-Diamond score.

Reasoning / knowledge:

- GPQA Diamond: **88.9%** (official card, Table 3).
- HLE, no tools and text only: **87.0%** (official card, Table 3).
- LCR / MLCR / CritPt: no verified public score found.
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found.
- Omniscience Accuracy / Hallucination Rate: no verified public score found.

Coding:

- SWE-bench Verified: **76.5%** (official card, Table 11). Benchgen also lists 76.5%, but its draft card has conflicting 2025 release and text-only metadata, so the exact official model card is the controlling source.
- SWE-Pro: **45.2%**; Multi-SWE-Bench: **76.5%**; SWE Multilingual: **46.9%** (official card, Table 11).
- LiveCodeBench v6: **86.5%**; Codeforces no-tool Elo: **3020**; AetherCode: **82.1%** (official card, Table 3).
- Competitive programming Pass@8: **73.02%**, ahead of GPT-5.2 at 65.08% and Gemini 3.0 Pro at 63.49% in the card's comparison (Figure 7).
- Putnam-200, Pass@8 with Lean/Python/Lean-search tools: **35.5%** (official card, Table 5).
- Claw-Eval / ClawProBench: no verified public score found.

Long context:

- MRCR v2, 8-needle: **25.0%**.
- Graphwalks BFS below 128K: **73.0%**; Graphwalks Parents below 128K: **74.0%**; LongBench v2 at 128K: **85.4%** (official card, Table 3).
- Frames: **37.5%**; DeR2 Bench: **77.5%** (official card, Table 3).
- The card explicitly notes that MRCR/Graphwalks leave headroom, although Frames places Seed 2.0 Pro first on that leaderboard. A successful 1M-class request is not reported, so the 256K API limit is not a measured retrieval limit.
Multimodal evidence:

- Vision Arena snapshot: 3rd overall as of 2026-02-16; Text Arena: 6th (official model-card footnote).
- MMU-Pro **85.4%**; MathVista **88.8%**; BLINK **79.5%**; DA-2K **92.3%** (official card, Table 8).
- HLE-VL **94.2%**, Minedojo-Verified **90.4%**, and MM-BrowseComp **53.9%** in the official agent evaluation (Table 11).

- The card includes public image and video suites such as DUDE, MMLongBench, LongDocURL, CGBench, LVBench, and ZeroVideo, confirming video evaluation but not proving production support on every API route.

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong search, research, and software-agent results (BrowseComp 94.2, WideSearch 70.8, Multi-SWE-Bench 76.5) are balanced by much weaker Terminal-Bench 2.0 (3.0), SWE-Bench Pro (45.2), BFCL-v4 (52.7), and 2-Bench retail (46.9).
- **Reasoning: 91/100.** GPQA Diamond 88.9, HLE 87.0, HLE-Verified 77.3, BrowseComp 94.2, and a 3020 no-tool Codeforces Elo justify a frontier-tier score; vendor-only reporting and weaker long-context probes keep it below the scale ceiling.
- **Context window: 82/100.** The 256K advertised limit and measured 128K LongBench v2 score of 85.4 support strong long-context performance, but MRCR v2 at 25.0 and no published successful run at the full API ceiling cap the score.
- **Multimodal: 95/100.** Image and video inputs are explicitly evaluated, with frontier results across visual reasoning, spatial tasks, documents, and video agents; the DeepInfra API record only verifies text/image, so a point is withheld for route-dependent video exposure.
- **Coding: 87/100.** SWE-bench Verified 76.5, Multi-SWE-Bench 76.5, LiveCodeBench v6 86.5, and Codeforces Elo 3020 are excellent, offset by SWE-Bench Pro 45.2, Terminal-Bench 3.0, and Aider Polyglot 8.5.
- **Cost efficiency: 83/100.** $0.50/M input and $3/M output is inexpensive for a frontier multimodal model, with cached input at $0.10/M; long prompts above 128K rise to $1/$6, so it is not in the top free/ultra-low-cost tier.
- **Overall Score: 87/100.** Best fit as a strong paid multimodal reasoning and long-horizon agent, especially for search, visual analysis, and competition-style coding; the very low terminal and broad SWE-Pro results make it less reliable for unattended coding agents than the headline scores suggest. Formula: half-up mean of 78, 91, 82, 95, and 87 = 86.6 → 87.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-25
- Method: Independent public-web research using ByteDance's official model card, models.dev, LLM Stats, and corroborating benchmark catalogs; scores are normalized 1–100 interpretations, not official vendor scores.
