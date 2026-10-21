# GPT-6 Luna — findings by Step 5 Preview

- Source: OpenAI / GPT-6 Luna (`openai/gpt-6-luna`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's budget GPT-6 tier at $0.10/$0.50 per 1M — "the cheapest model that can still do real coding": DeepSWE 66.6% at $0.22/task (matching GPT-6 Sol at xhigh for a fifth of the cost), AIME-class math via FrontierMath Tier 4 56.1%, but it collapses at low effort (DeepSWE 2.4%) and must run at max for agentic work.
- **Provider / access:** OpenAI API (`gpt-6-luna`, Responses + Chat Completions + Batch at 50% off), ChatGPT Work/Codex, GitHub Copilot (Pro+); Free/Go ChatGPT tiers run Luna since 2026-10-08; OpenCode Zen (`opencode/gpt-6-luna`).
- **Release / knowledge:** released 2026-09-22 with GPT-6 Sol under GPT-6 Astra (AI Catchup, OpenAI launch post); knowledge cutoff 2026-05-18.
- **IDs:** `openai/gpt-6-luna` (OpenAI), `opencode/gpt-6-luna` (Zen).
- **Context window:** 1.05M total; 128K max output (AI Catchup specs table, BenchLM).
- **Modalities:** text and image in; text out; six reasoning-effort levels (none→max; default medium — max required for agentic tasks); tool/function calling; GPT-6 prompt caching with effort-change-safe prefixes.
- **Pricing (as of 2026-10-21):** $0.10/$0.50 per 1M in/out, $0.01 cached input, $0.125 cache write (AI Catchup); measured per-task costs $0.006–$0.27 on OpenAI's own charts.
- **Architecture:** proprietary; parameter count not published; trained with methods similar to GPT-6 Astra (OpenAI).

### Raw benchmarks found

OpenAI launch-post effort curves (2026-09-22, best-effort rows) + Artificial Analysis / ARC Prize / Epoch AI figures via BenchLM:

Agent / tool use:

- AA AutomationBench: **53.2%** (Artificial Analysis via BenchLM)
- GDPval-AA: **1,432 Elo / 46.6%** normalized (Artificial Analysis via BenchLM)
- Agents' Last Exam V1: **50.9%** at max effort ($0.15/task) (OpenAI; comparator Astra 59.3%, Sol 56.4%)
- OSWorld 2.0 offline: **52.7%** at max ($0.27/task) (OpenAI; comparator Astra 73.5%)
- AutomationBench 1.0 (OpenAI harness): **20.7%** at max ($0.037) — collapses to 1.2% at low effort
- Hermes Bench: **70.5%** / Hermes Index: **33.9%** (Nous Research via BenchLM)
- AA AnalystAgent: **43.8%** (Artificial Analysis via BenchLM)
- AA Terminal-Bench 4.0: **12.6%** (Artificial Analysis via BenchLM) — weak on the newest harness
- ExploitGym: **11.6%** (GPT-6 Astra system card via BenchLM); MazeBench: **0%** (MazeBench via BenchLM)
- Terminal-Bench 2.x / Tau3 / Claw-Eval / MCP-Atlas / Toolathlon: no verified public score found

Reasoning / knowledge:

- AA-HLE: **38.5%** (Artificial Analysis via BenchLM) — just under the 40% frontier ref
- Artificial Analysis Intelligence Index: **38.1%** (Artificial Analysis via BenchLM — mid band)
- FrontierMath v2: **78.9%** Tiers 1–3 / **56.1%** Tier 4 (Epoch AI via BenchLM) — strong math for a budget tier
- AA-LCR (long-context reasoning): **83.3%** (Artificial Analysis via BenchLM)
- ARC-AGI-1: **86.67%** / ARC-AGI-2: **59.3%** (ARC Prize semi-private via BenchLM)
- CritPt: **19.4%** (Artificial Analysis via BenchLM); MLCR-AA: **16.1%** (AA via BenchLM)
- AA-Omniscience: Accuracy **43.8%**, Hallucination Rate **76.7%** (Artificial Analysis via BenchLM); OpenAI factuality eval 7.6% error rate at max
- HealthBench Professional: **60.8%** / Hard: **31.4%** (GPT-6 Astra system card via BenchLM)

Coding:

- DeepSWE v1.1: **66.6%** at max effort ($0.22/task) (OpenAI; comparator GPT-6 Sol 68.8% at $2.74, GPT-6 Astra 74.1% at $4.43); **2.4%** at low effort
- AA-SciCode: **54.6%** (Artificial Analysis via BenchLM)
- FrontierCode 1.1 Main: **42.4%** at max ($0.11) (OpenAI; comparator Sol 49.3%, Astra 53.3%)
- Bug Hunt Bench: **18.3 fixes** (Bug Hunt Bench via BenchLM)
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / Vibe Code Bench: no verified public score found

Long context:

- AA-LCR **83.3%** long-context reasoning (Artificial Analysis, via BenchLM); 1.05M native window with 128K output; no MRCR/RULER/GraphWalks retrieval-at-length figure published.

Multimodal extras (traceability): AA-MMMU-Pro 79.7%; ExtractBench 91.01%, ParseBench 65.77% (LlamaIndex); deception rate 2.8% on OpenAI's coding-deception eval.

### Normalized scores (1–100)

- **Tool use: 82/100.** AA AutomationBench 53.2%, Agents' Last Exam 50.9%, GDPval 1,432 Elo and Hermes Bench 70.5% are all strong-to-mid results at max effort, with $0.006–$0.27 per task; capped by AA Terminal-Bench 4.0 12.6%, AnalystAgent 43.8%, ExploitGym 11.6% and the low-effort collapse (AutomationBench 1.2%, DeepSWE 2.4%) that forces max-effort spend.
- **Reasoning: 88/100.** HLE 38.5% (just under the 40% frontier ref), FrontierMath v2 Tier 4 56.1%, ARC-AGI-2 59.3% and AA-LCR 83.3% are frontier-adjacent for a $0.10-tier model; capped by AA Intelligence Index 38.1 (mid band), CritPt 19.4%, MLCR 16.1% and the 76.7% AA-Omniscience hallucination rate.
- **Context window: 95/100.** 1.05M native window with 128K max output lands in the ≥1M tier; AA-LCR 83.3% is good long-context reasoning but no ≥98% retrieval-at-512K evidence exists for 100.
- **Multimodal: 68/100.** Text + image input with text out (image-in tier 60–70); AA-MMMU-Pro 79.7% and ExtractBench 91.01% are solid; no video/audio input and no non-text output.
- **Coding: 84/100.** DeepSWE 66.6% at $0.22/task is the standout — the same score GPT-6 Sol reaches at $1.00 — and AA-SciCode 54.6% clears the frontier reference; capped by FrontierCode 42.4% (below Sol 49.3%/Astra 53.3%) and no published SWE-bench Verified/Pro numbers.
- **Cost efficiency: 98/100.** $0.10/$0.50 with $0.01 cached input sits at the ~$0.10/$0.20 ≈ 97–99 reference band; measured per-task costs of $0.006–$0.27 against GPT-6 Sol's $0.16–$2.93 make it the cheapest route to real coding on the board.
- **Overall Score: 83/100.** Mean of (82 + 88 + 95 + 68 + 84) / 5 = 83.4 → 83. Best fit: high-volume coding subagents, bulk classification and extraction at cents per task — always pin max effort; Astra keeps the computer-use crown.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-21
- Method: public internet research (AI Catchup's OpenAI launch-chart transcription, Artificial Analysis/ARC Prize/Epoch AI/Nous figures via BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
