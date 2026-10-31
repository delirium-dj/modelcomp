# Kimi K3.1 Pro — findings by MiMo 2.6 Flash

- Source: Moonshot AI (`moonshotai/kimi-k3.1-pro`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro — Moonshot AI's flagship reasoning model, first of the K3.1 series; a post-trained successor to Kimi K3 (same 2.8T MoE base, much larger post-training RL compute). Not an alias; `kimi-k3.1-pro-highspeed` is a serving-profile twin (2–3× speed, same weights), never a separate model.
- **Short description:** frontier open-weight-class model aimed at coding, 3D creation, financial research and long-horizon agentic work; tops Terminal-Bench 4.0 in independent runs and ranks #4 on the AA Intelligence Index at launch.
- **Provider / access:** Kimi API `kimi-k3.1-pro` / `kimi-k3.1-pro-highspeed` (OpenAI-compatible Chat Completions on `platform.kimi.ai`, Zero Data Retention available), Kimi.ai apps, Kimi Code, Kimi Work; OpenRouter `moonshotai/kimi-k3.1-pro`. **Not on OpenCode Zen** (checked the live Zen model list 2026-10-30 — only `kimi-k3` is listed) and no Free ID anywhere.
- **Release / knowledge:** 2026-10-23 (launch blog + AA launch article); **full model weights promised by 2026-11-04 but not yet published** as of 2026-10-30 (AA: "Weights currently not published"), so it behaves as a proprietary model today despite the open-weight commitment. Knowledge cutoff: not published.
- **IDs:** `kimi-k3.1-pro`, `kimi-k3.1-pro-highspeed` (Kimi API); OpenRouter `moonshotai/kimi-k3.1-pro`; no Hugging Face weights repo yet.
- **Context window:** **1M tokens** (AA "Context window: 1M"; Kimi blog "1-million-token context window"; BenchLM lists 1.05M). Max output tokens: not published.
- **Modalities:** **text + image in; text out** (Artificial Analysis spec row). Moonshot's own release coverage adds "native image and video" (AI Release Tracker) — conflicting and unconfirmed by AA, so image is the verified input; heavy document/chart work is published with PDFs rendered as images (OfficeQA Pro, GDP.pdf). Reasoning yes — published numbers require `max` effort and thinking **cannot be turned off** (codersera); tool calls yes; structured output via API.
- **Pricing (as of 2026-10-30):** **$2.00 input / $10.00 output / $0.20 cache-hit per 1M** (AA; 33% below Kimi K3 on all three rates) — no free tier. AA measures **$1.98 per Intelligence Index task** (vs Muse Wonder $4.52, Claude Opus 5.5 $5.98).
- **Architecture:** 2.8T total / 104B active parameters, Mixture-of-Experts (AA + AI Release Tracker, inheriting Kimi K3's base); currently proprietary, open-weight release (with cyber-related training data deliberately removed) due 2026-11-04.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1846 Elo** <(AA leaderboard — 3rd of all models, behind Claude Opus 5.5 1866 and Muse Wonder Full 1857; +312 over Kimi K3)>
- Terminal-Bench 4.0: **65.7%** <(Moonshot launch blog, Claude-Code harness)> / **67.2%** <(AA's own run — "the highest score of any model on Terminal-Bench 4.0", ahead of Claude Sonnet 5.5 64%) — two harnesses, both listed>
- AutomationBench-AA (agentic SaaS workflows): **73.3%** <(AA — up from Kimi K3's 58%)>
- OSWorld 2.1 (computer use): **79.6%** <(Moonshot, Kimi Agent harness)>
- AA-Briefcase: **1678 Elo**; APEX-Agents: **67.2%** <(Mercor leaderboard, cited by Moonshot)>
- BrowseComp: **92.1%**; HLE with tools: **70.0%**; Agents' Last Exam: **43.2%**; BioMysteryBench: **80.6%**; HANDBOOK.md: **44.6%** <(Moonshot launch blog)>
- Harvey Legal Agent (public 1,251 tasks): **23.7%** <(Moonshot, AA Stirrup harness all-pass)>; MazeBench (ASCII, no tools): **2%** <(MazeBench leaderboard>
- Finance agents: Frontier Finance **58.6%**, OfficeQA Pro v2 **64.4%** (claimed SOTA), Financial Modeling **57.6%**, Financial Research **70.4%**, Business Operation **37.8%** <(Moonshot, several internal harnesses)>
- Tau2/Tau3-Bench, Claw-Eval, Toolathlon, MCP-Atlas score for this model: **no verified public score found** (2026-10-30; MCP Atlas is run in Moonshot's footnotes but the result is not published as a number)

Reasoning / knowledge:

- GPQA Diamond: **94.2%** <(Moonshot launch blog — clears the 90%+ frontier reference)>
- HLE: **51.1%** without tools / **70.0%** with tools <(Moonshot)> vs **52.5%** <(AA's independent run — the no-tools figure agrees closely across harnesses)>
- Artificial Analysis Intelligence Index: **55** (v4.3, max effort) <(AA launch article — #4 of all models, +11 vs Kimi K3's 44; only Opus 5.5 58, Sonnet 5.5 56 and Muse Wonder Full 56 score higher)> — **conflict:** BenchLM shows **46.0** because it now uses Index **v5** (suite rebuilt 2026-10-27); version change, not a contradiction of the same tests
- CritPt: **24.6 / 25%** <(AA leaderboard / AA article); MLCR-AA: **38.3%**; AA-LCR (long-context reasoning): **86.3%** <(AA leaderboards>
- AA-Omniscience: index **29.9**, accuracy **48.9%**, hallucination rate **37.3%** <(AA — mediocre factual robustness on AA's suite)>
- Kimi Hallu Bench (internal): claim-level hallucination **5.4%** without tools / **8.3%** with tools <(Moonshot — best-in-class on their own hard set, beats Claude Opus 5.5's 15.0; direct conflict with AA's 37.3% Omniscience rate, different benchmarks and grading>
- MMLU-Pro: **no verified public score found** (2026-10-30)

Coding:

- DeepSWE 1.1: **75.5%** <(Moonshot, Claude-Code harness — above the 74%+ frontier reference)>
- Kimi Code Bench v2: **77.1%**; Kimi Code Bench 3.0 Long-horizon: **61.2%** <(Moonshot internal, vs Kimi K3's 55.95)>
- SWE-Marathon v1.1: **51.7%** <(Moonshot; official leaderboard)>; ProgramBench (binary): **31.5%**; PostTrainBench v1.2: **36.5%** <(Moonshot>
- AA-SciCode: **60.8%** <(AA — above the 55%+ frontier reference)>
- Bug Hunt Bench: **36.0 fixes** <(public data>
- Cyber (AA Cyber Index): **64.1%**, CWE-Bench-AA 60.8%, CyberGym-E2E-AA 94.7% <(AA — deliberately reduced vs the uncontrolled checkpoint, which scored 90.5 on xdev-bench-hard>
- SWE-bench Verified / SWE-Pro, LiveCodeBench, Terminal-Bench 2.1, Vibe Code Bench: **no verified public score found** (2026-10-30)

Long context:

- AA-LCR: **86.3%** <(Artificial Analysis long-context-reasoning leaderboard at 1M-class lengths — strong, but short of the ≥98%-at-512K+ bar for a 100>
- MLCR-AA: **38.3%** <(AA — roughly 3× Muse Wonder's 22.2%>
- MRCR / GraphWalks / RULER: **no verified public score found** (2026-10-30)

### Normalized scores (1–100)

- **Tool use: 93/100.** Best-in-class agentic evidence: GDPval-AA 1846 Elo (#3 overall), Terminal-Bench 4.0 67.2% (AA's highest measured), AutomationBench-AA 73.3%, OSWorld 2.1 79.6%, BrowseComp 92.1%. Held to 93 rather than 95+ by Harvey Legal Agent 23.7%, MazeBench 2%, and no Tau2/Tau3, Claw-Eval or MCP-Atlas score published for this model.
- **Reasoning: 91/100.** GPQA Diamond 94.2% clears the top anchor and HLE 51–52% (independently confirmed by AA at 52.5%) is well above the 40%+ frontier reference, with an AA Intelligence Index of 55 (#4 of all models at launch). Capped below 93 by AA-Omniscience (index 29.9, 37.3% hallucination) — Moonshot's own 5.4% Hallu-Bench tells the opposite story on its own suite, and that disagreement keeps factual robustness unproven.
- **Context window: 95/100.** Verified 1M tokens (Moonshot, AA, BenchLM 1.05M) → ≥1M tier (95–100); AA-LCR 86.3% is solid long-context retrieval but below the ≥98%-at-512K+ evidence required for 100.
- **Multimodal: 75/100.** Verified image input plus a deep document/chart benchmark set (MMMU-Pro 84.1, CharXiv 93.4, PerceptionBench 68.3, GDP.pdf, OfficeQA Pro with PDFs rendered as images) puts it in the "+video/PDF in = 75–90" band rather than plain image-in (60–70); no audio, no non-text output, and Moonshot's "native video" claim is not confirmed by Artificial Analysis — so no 90+.
- **Coding: 92/100.** DeepSWE 75.5% and AA-SciCode 60.8% both clear the methodology's frontier references, backed by Kimi Code Bench v2 77.1%, long-horizon 61.2% and SWE-Marathon 51.7%. Capped below 94 by the absence of SWE-bench Verified, LiveCodeBench and Terminal-Bench 2.1 (the standard coding anchors) and by ProgramBench binary 31.5%.
- **Cost efficiency: 85/100.** $2/$10 per 1M with $0.20 cache and a measured $1.98 per Intelligence Index task — cheaper per task than Muse Wonder ($4.52), Claude Opus 5.5 ($5.98) and Claude Sonnet 5.5 ($5.46), in the $1.25/$4.25 → ~88 band adjusted upward for the low cost-per-task. Not 100 because there is no $0 route (no Zen Free tier, no open-weight download yet — weights only arrive 2026-11-04).
- **Overall Score: 89.2/100.** (93 + 91 + 95 + 75 + 92) / 5 = 89.2 — a near-frontier agentic/coding/finance workhorse at mid-tier pricing; buy it for Terminal-Bench-class agents and GPQA-level reasoning, not for audio/video understanding.

---

## Signature

- Provided by: **MiMo 2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-30
- Method: public internet research across DuckDuckGo Lite, Moonshot's official launch blog, Artificial Analysis (launch article + leaderboards), BenchLM, OpenRouter and the live OpenCode Zen model list (2026-10-30); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts compared and both sides published (TB4.0 65.7 Moonshot vs 67.2 AA; Index 55 v4.3 vs 46.0 v5; hallucination 5.4% internal vs 37.3% AA); no number invented.
- Reference URLs:
  - [Moonshot AI — Introducing Kimi K3.1 Pro (official launch blog, 2026-10-23)](https://www.kimi.ai/blog/kimi-k3-1-pro)
  - [Artificial Analysis — Kimi K3.1 Pro launches at 4th on the Intelligence Index scoring 55](https://artificialanalysis.ai/articles/kimi-k3-1-pro-launch-benchmarks)
  - [Artificial Analysis — Kimi K3.1 Pro model page](https://artificialanalysis.ai/models/kimi-k3-1-pro)
  - [BenchLM — Kimi K3.1 Pro (74.61/100, #13/1004, 72 rows, 2026-10-29)](https://benchlm.ai/models/kimi-3-1-pro)
  - [OpenRouter — moonshotai/kimi-k3.1-pro benchmarks](https://openrouter.ai/moonshotai/kimi-k3.1-pro/benchmarks)
  - [Terminal-Bench 4.0 official leaderboard](https://www.tbench.ai/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Re-check after 2026-11-04 (weights release) for license, local benchmarks and any pricing change.
