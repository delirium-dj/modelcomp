# MiniMax M2.7 — findings by Claude Opus 5

- Source: MiniMax (`MiniMax-M2.7`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7
- **Short description:** MiniMax's open-weight frontier MoE for **agentic coding, multi-agent collaboration and office productivity**, described in this repo's curated metadata as "self-improving". Its standout property in the evidence below is the tightness of its independent verification: **three separate harnesses measure GPQA Diamond within 0.8 points of each other** ([MiniMax M2.7 launch post](https://www.minimax.io/news/minimax-m27-en)). Distinct model; M2.5, M3 and the API-only M3.1 Flash Preview have their own folders.
- **Provider / access:** **OpenCode Zen** as `minimax-m2.7` on `https://opencode.ai/zen/v1/chat/completions` ([Zen docs](https://opencode.ai/docs/zen/)); MiniMax's own API; and **open weights** (BenchLM classifies it Open Weight). Also on OpenRouter as `minimax/minimax-m2.7`.
- **Release / knowledge:** **No explicit release date** surfaced in the sources I consulted. It succeeds MiniMax M2.5 and precedes M3. Knowledge cutoff: no verified public date found.
- **IDs:** `MiniMax-M2.7` / `minimax-m2.7` / `opencode/minimax-m2.7`. **No free tier** — `noFreeId: true` is correct; the open weights are the free path.
- **Context window:** **200,000 tokens** ([BenchLM](https://benchlm.ai/models/minimax-m2-7)); this repo's metadata records a 196K–205K "200K class" window with **131K max output** — a generous output ceiling.
- **Modalities:** **Text in → text out.** This repo's metadata states "Text in/out only", and no vision benchmark exists. One ambiguity worth flagging honestly: the model posts **62.7% on MM-ClawBench**, whose "MM-" prefix denotes a *multimodal* agentic benchmark — which would imply image handling. I could not resolve that against the text-only metadata, so I record the conflict and score the dimension as text-only. Reasoning: BenchLM classifies the tracked row **Non-Reasoning**, though the model's AIME and HMMT figures suggest a thinking configuration exists. Tool calls: yes, extensively evaluated.
- **Pricing (as of 2026-10-08):** OpenCode Zen — **$0.30 / MTok input, $1.20 / MTok output, $0.06 / MTok cached read**. Open weights are free to self-host.
- **Architecture:** Mixture-of-Experts, open weights. Parameter counts, expert configuration and attention design did not surface in the sources I could reach.

### Raw benchmarks found

> **Very well covered — 46 of 625 benchmarks — and unusually well cross-verified.** Figures arrive from MiniMax's own launch post, Artificial Analysis, Vals AI, and notably **two competitors' comparison tables** (Z.AI's GLM-5.1 model card and Arcee's Trinity-Large-Thinking post), which is adversarial-interest third-party reporting. On GPQA Diamond the GLM card says 87.0%, Artificial Analysis 87.4% and Vals AI 86.6%.

Agent / tool use:

- **τ²-bench: 84.8%** ([Artificial Analysis](https://artificialanalysis.ai/models/minimax-m2-7)); **τ³-bench: 67.6%** ([GLM-5.1 model card](https://huggingface.co/zai-org/GLM-5.1))
- **MLE-Bench Lite: 66.6%** (MiniMax) — machine-learning engineering tasks
- **MM-ClawBench: 62.7%** (MiniMax)
- Terminal-Bench 2.0: **57.0%** (MiniMax); independently **Terminal-Bench 2.1: 48.7%** ([Vals AI](https://www.vals.ai/models/minimax_MiniMax-M2.7))
- Claw-Eval: **48.7%** ([leaderboard](https://claw-eval.github.io/)); Toolathlon: **46.3%** (MiniMax); Gert Labs: **40.40%** ([Gert Labs](https://gertlabs.com/rankings))
- GDPval-AA: **1087 Elo** / **25.7%** normalized; AA Agentic Index: **16.8%**; **APEX-Agents-AA: 10.6%** (Artificial Analysis)

Reasoning / knowledge:

- **GPQA Diamond: 87.0%** (GLM-5.1 comparison table) / **87.4%** (Artificial Analysis) / **86.6%** (Vals AI) — **three harnesses within 0.8 points**, which is the tightest three-way agreement I have recorded in this research pass
- MMLU-Pro: **80.4%** (Vals AI) / **80.8%** ([Arcee](https://www.arcee.ai/blog/trinity-large-thinking))
- **AIME 2026: 89.8%** (GLM card); AIME 2025: **80.0%** (Arcee); HMMT Nov 2025 **81.0%**, Feb 2026 **72.7%** (GLM card)
- HLE: **28%** (GLM card) / **AA-HLE 29.6%** (Artificial Analysis) — close agreement
- **AA-IFBench: 75.7%**; **AA-LCR: 78.3%**; **CritPt: 0.6%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **22.8**; BenchLM overall **48.62/100, rank #102 of 889**
- **AA-Omniscience: Index +0.8, Accuracy 26.8%, Hallucination Rate 35.6%** — a positive index and a sub-36% hallucination rate, among the better abstention profiles in this dataset

Coding:

- **SWE-bench Verified: 75.4%** (Arcee comparison table) / **73.8%** ([Vals AI](https://www.vals.ai/models/minimax_MiniMax-M2.7)) — two independent sources within 1.6 points
- **SWE-bench Multilingual: 76.5%** (MiniMax)
- **LiveCodeBench: 79.9%** (Vals AI)
- React Native Evals: **71.4%** ([rn-evals](https://rn-evals.vercel.app/))
- SWE-bench Pro: **56.2%**; VIBE-Pro: **55.6%**; Multi-SWE Bench: **52.7%**; NL2Repo: **39.8%** (MiniMax)
- SWE-Rebench: **51.9%** ([leaderboard](https://swe-rebench.com/)); AA Coding Index: **52.6%**; AA-SciCode: **50.1%**
- Vibe Code Bench: **27.04%** ([Vals AI](https://www.vals.ai/benchmarks/vibe-code))

Multimodal:

- **No vision benchmark.** Design Arena — Website **1248 Elo** ([OpenRouter](https://openrouter.ai/minimax/minimax-m2.7/benchmarks)) measures generated front-end design preference, not vision. The MM-ClawBench result is recorded under agentic above with its ambiguity flagged.

Long context:

- No MRCR, RULER or needle-retrieval number at any depth. **AA-LCR 78.3%** is the only quantified long-context signal — and a strong one for a 200K window.

### Normalized scores (1–100)

- **Tool use: 70/100.** A broad, credible agentic profile: **τ²-bench 84.8%**, τ³-bench 67.6%, **MLE-Bench Lite 66.6%** (genuine ML-engineering capability, rarely measured) and MM-ClawBench 62.7%, with Terminal-Bench 2.0 at 57.0% and an independent 48.7% on the harder 2.1. Capped by Toolathlon 46.3%, Gert Labs 40.40%, an AA Agentic Index of 16.8%, and **APEX-Agents at 10.6%** — the long tail is weak even where the headline results are solid.
- **Reasoning: 76/100.** The best-verified reasoning profile in this batch: **GPQA Diamond at 87.0 / 87.4 / 86.6 across three independent harnesses**, with HLE agreeing at 28% / 29.6% between two more. MMLU-Pro ~80.6%, AIME 2026 89.8%, AA-IFBench 75.7% and AA-LCR 78.3% are all strong, and a **35.6% hallucination rate with a positive Omniscience Index** is a real deployment advantage. Capped by **CritPt 0.6%**, an AA Intelligence Index of 22.8, and 26.8% Omniscience accuracy.
- **Context window: 72/100.** 200,000 tokens with a **131K output ceiling** is a solid, well-balanced specification — the output limit in particular is more generous than most 200K-class models. **AA-LCR 78.3%** is a strong usable-quality signal. Held in the low 70s because 200K is mid-pack against this dataset's 1M windows and no retrieval curve exists.
- **Multimodal: 15/100.** **Text-only** per the vendor-adjacent metadata, with no vision benchmark and no modality claim in the launch coverage I could reach. Template floor. The MM-ClawBench score is the one piece of contrary evidence and is flagged above rather than used to inflate this; if MiniMax documents image input, this should be revisited.
- **Coding: 78/100.** Strong and independently corroborated: **SWE-bench Verified at 75.4% and 73.8% from two separate third parties** (a competitor's comparison table and Vals AI), **SWE-bench Multilingual 76.5%**, **LiveCodeBench 79.9%** and React Native Evals 71.4%. Capped by the harder sets — SWE-bench Pro 56.2%, Multi-SWE Bench 52.7%, SWE-Rebench 51.9%, NL2Repo 39.8% — and by Vibe Code Bench 27.04%.
- **Cost efficiency: 88/100.** $0.30 in / $1.20 out per MTok with $0.06 cached reads, for a model posting **SWE-bench Verified ~74% and GPQA Diamond ~87%**, is excellent value — roughly a fifth of Claude Sonnet-class pricing for comparable coding capability — and the **open weights** remove vendor lock-in entirely. Docked for no free tier on any route, for the parameter count being undisclosed (so self-hosting feasibility is unknown), and because MiniMax M3 is available on Zen at exactly the same $0.30 / $1.20 / $0.06 and scores 54.65 against this model's 48.62.
- **Overall Score: 62.2/100.** Mean of the five non-cost dims (70 + 76 + 72 + 15 + 78) / 5 = 68.2. Best fit: **cheap, open-weight agentic coding and ML-engineering work** — repository repair across multiple languages, MLE-Bench-style pipeline tasks, multi-agent collaboration — where a 35.6% hallucination rate and triple-verified GPQA give unusual confidence for the price. The Overall is suppressed roughly 13 points by the text-only floor; on text-and-tools workloads this is a strong model. Note that M3 is the same price on Zen and scores higher.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — BenchLM's aggregated MiniMax M2.7 page (46 of 625 benchmarks, 200K context, Open Weight classification, Non-Reasoning harness label, and the intra-family score comparison used in the cost assessment) and the underlying sources it cites: MiniMax's own launch post for Terminal-Bench 2.0, Toolathlon, MLE-Bench Lite, MM-ClawBench, SWE-bench Pro, SWE-bench Multilingual, Multi-SWE Bench, VIBE-Pro and NL2Repo; **Z.AI's GLM-5.1 model card and Arcee's Trinity-Large-Thinking post** — competitors' comparison tables, i.e. third-party reporting with adversarial interest — for GPQA Diamond, HLE, AIME, HMMT, MMLU-Pro and SWE-bench Verified; and the Artificial Analysis, Vals AI, Claw-Eval, SWE-Rebench, Gert Labs, rn-evals and OpenRouter leaderboards. The OpenCode Zen docs supplied the ID, endpoint and pricing. The three-way GPQA Diamond convergence (87.0 / 87.4 / 86.6) and the two-way SWE-bench agreement (75.4 / 73.8) are reported explicitly as credibility signals; the Terminal-Bench 2.0-versus-2.1 gap (57.0 vs 48.7) is reported and the independent figure weighted. **A genuine ambiguity is flagged rather than resolved in the model's favour:** the 62.7% MM-ClawBench result implies multimodal capability that the available metadata ("Text in/out only") contradicts, and the multimodal dimension is scored text-only pending clarification. No release date surfaced, so none is asserted. No data was imported from `minimax-m3`, `minimax-m2.5` or `minimax-m3.1-flash-preview`, which have their own folders; the M3 comparison uses only its BenchLM aggregate and Zen list price. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
