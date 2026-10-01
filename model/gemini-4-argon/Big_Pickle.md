# Gemini 4 Argon — findings by Big Pickle

- Source: Google (`gemini-4-argon` — no published API model ID as of 2026-10-01)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google DeepMind's frontier model announced 2026-09-30, positioned above the Gemini 3.8 Flash line for long-horizon software engineering, enterprise knowledge work (legal/finance), and defensive cybersecurity. Not a variant or alias of an existing entry — it is a new top-of-family model. Rollout starts with trusted cyber defenders via the Fairwind Program.
- **Provider / access:** Google. Expected Gemini API / Vertex AI `generate_content` (standard Gemini call shape) plus a new "Long Decode Continuation" API feature that pauses and resumes long generations across calls. No public model ID, no OpenRouter / models.dev / Vertex AI / Gemini CLI / Cursor listing as of 2026-09-30; broader access promised to paid API customers and Google AI Ultra subscribers first.
- **Release / knowledge:** 2026-09-30 (announced). Knowledge cutoff not disclosed.
- **IDs:** no published API ID; AA tracks it as `Gemini 4 Argon (high)` / `Gemini 4 Argon (High)`. No Free tier ID exists.
- **Context window:** 1M tokens (AA, vals.ai, Google). Max output: 262,144 tokens per vals.ai's run configuration; Google markets an "industry-leading 1M token" output limit reached via Long Decode Continuation. Max-output treatment is noted as a caveat, not a separate score.
- **Modalities:** text, image, video, and speech input with text output (AA article); the AA model page lists text and image input only — the discrepancy is unresolved, and AA's own run configuration was image+text. Reasoning: yes. Tool calls / JSON mode: no verified public spec found.
- **Pricing (as of 2026-10-01):** introductory $2.00 in / $10.00 out per 1M; cached input 95% off input ($0.10/1M). After the (unconfirmed-length) introductory period, $4.00 in / $20.00 out. Paid, no free tier. Long generations at $10/1M out are expensive in practice; Google has not stated whether reasoning tokens bill at the output rate.
- **Architecture:** proprietary; Google has not disclosed parameter count or topology.

### Raw benchmarks found

Agent / tool use:

- Terminal-bench 4.0: **57.4%** (Google's published comparison; AA independently measures **57%**, ranked **#8 / 223** — a +53 point jump over Gemini 3.1 Pro Preview)
- AutomationBench-AA: **78%** (#1 among measured models, +7 pts over Claude Sonnet 5.5 max at 71%; AA)
- AutomationBench (Zapier): **51.3%** (#1; Google)
- AA-Briefcase v1.1: **1494 Elo** with **65% rubric pass rate** (AA — highest recorded), analytical quality 1576 Elo, presentation 1308 Elo
- CWE-bench v1: **68.0%** (tied #1 with GPT-6 Astra; official leaderboard cited by Google)
- OSWorld-2.0 (offline subset): **69.2%** (Google; GPT-6 Astra 72.6%)
- PostTrainBench: **45.3%** (Google; Claude Opus 5.5 49.3%)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no standalone public score found (GDPval-AA v2.1 is inside the AA Intelligence Index, value not published separately)
- Claw-Eval / ClawProBench, Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.2: **53** / **#8 of 223** (AA, independent — matches GPT-6 Astra max at 53, +1 over GPT-6.1 Sol max at 52, +23 over Gemini 3.1 Pro Preview at 30)
- LABBench 2 (lit-lab): **88.8%** (Google; GPT-6 Astra 85.4%)
- RiemannBench: **76.0%** (Google; GPT-6 Astra 72.0%)
- Agent's Last Exam (pass rate): **39.5%** (Google; Claude Opus 5.5 38.2%, GPT-6 Astra 34.2%)
- Vals Index (GDP-weighted finance/coding/legal/tax composite): **68.9%** (#1; Google — Claude Opus 5.5 67.0%, Fable 5.1 65.8%, GPT-6 Astra 63.1%)
- Vals Finance Agent v2: **65.4%** (Google — Fable 5.1 58.9%, GPT-6 Astra 53.5%)
- Harvey Legal Agent Benchmark: **19.6%** (Google — Fable 5.1 6.7%, Astra 5.4%, Opus 5.5 3.8%; every model fails most of this benchmark)
- GPQA Diamond: no verified public score found
- HLE: no standalone public score found (HLE is inside the AA Index)
- LCR / MLCR: no standalone public score found (AA-LCR v1.1 is inside the AA Index)
- CritPt: no standalone public score found (inside the AA Index)
- AA-Omniscience Accuracy / Hallucination Rate: **50% / 15%** (AA — 15% hallucination rate is the lowest of any model scoring 45+ on the Index; GPT-6 Astra max 51%, GPT-6.1 Sol max 54%). Omniscience composite score **42** (Astra 43, Sol 42).

Coding:

- DeepSWE v1.1: **77.9%** (state of the art; Google — Claude Opus 5.5 74.2%, GPT-6 Astra 74.1%, Fable 5.1 67.4%)
- Vibe Code Bench: **91.9%** (#1; Google — Fable 5.1 and Opus 5.5 both 90.3%, Astra 89.6%)
- FrontierSWE v2: **55.0%** (Google — GPT-6 Astra 65.5%, Opus 5.5 62.3%; a 10.5-point deficit)
- Terminal-Bench Science 0.1: **57.6%** (Google — GPT-6 Astra 68.1%)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no standalone public score found (SciCode is inside the AA Index)
- DeepSWE v1.1 remains the headline coding number; note Google's own table shows a 3-of-5 coding-suite win profile.

Long context:

- GraphWalks (BFS F1, up to 128K): **99.7%** (#1; Google — GPT-6 Astra 98.7%)
- GraphWalks (BFS F1, 256K–1M): **84.2%** (Google — GPT-6 Astra 71.8%, Opus 5.5 66.8%, Fable 5.1 65.0%); a 12.4-point lead at the 1M end
- MRCR / RULER: no verified public score found
- Prompt-injection robustness: leading on Gray Swan's Indirect Prompt Injection (IPI) benchmark (Google claim, value not published)

### Normalized scores (1–100)

- **Tool use: 85/100.** #1 on AutomationBench-AA at 78% and #8/223 on AA's Terminal-Bench 4.0 at 57% are frontier agentic results, reinforced by Google's Zapier AutomationBench #1 at 51.3% and AA-Briefcase's record 65% rubric pass. Capped because Terminal-bench 4.0 at 57.4% still trails Sonnet 5.5 (70.6% on the same benchmark per third-party testing), OSWorld-2.0 offline loses to Astra, and PostTrainBench trails Opus 5.5 — terminal-driven work is not yet Argon's strength.
- **Reasoning: 89/100.** AA Intelligence Index 53 (#8/223) ties GPT-6 Astra and beats every other lab's flagship, and the knowledge-work sweep is real: Vals Index #1 at 68.9%, Vals Finance Agent v2 65.4%, LABBench 2 88.8%, RiemannBench 76.0%, Agent's Last Exam 39.5%. The 15% AA hallucination rate (lowest in the 45+ cohort) is a genuine reliability edge. Capped by no published GPQA Diamond / HLE / CritPt values and by Agent's Last Exam still sitting under 40%.
- **Context window: 97/100.** 1M-token context confirmed by AA, vals.ai and Google, with measured retrieval at 99.7% GraphWalks BFS F1 up to 128K and 84.2% from 256K to 1M — the best long-window retrieval in the published comparison. Held off 100 because 84.2% at the 256K–1M band is well short of the ≥98%-at-512K+ bar, and the 1M output ceiling is only reachable via the new Long Decode Continuation path rather than a single request.
- **Multimodal: 88/100.** AA lists text, image, video and speech input; Google's LVBench long-video score of 91.7% is state of the art and Chartography 71.6% barely edges Astra's 71.0%, so chart/document/video understanding is proven in practice. Capped because output is text-only, AA's own model page lists text+image only (leaving audio/video input documented but not independently reproduced), and no audio-in harness result was found.
- **Coding: 91/100.** DeepSWE v1.1 at 77.9% is a new state of the art and Vibe Code Bench 91.9% is #1, which is the profile of a top-tier long-horizon coder. Capped by the documented losses on FrontierSWE v2 (55.0% vs Astra's 65.5%) and Terminal-Bench Science 0.1 (57.6% vs 68.1%), plus no public SWE-bench Verified, LiveCodeBench or standalone SciCode number to corroborate.
- **Cost efficiency: 70/100.** Paid tier, but a deeply promotional one: $2 in / $10 out per 1M with a 95% cache discount, giving AA a measured $1.99 per Intelligence Index task at Index 53 — frontier intelligence at 60% of GPT-6 Astra's $3.26 per task. Caps the score because the promo end date is unconfirmed, the standard rate doubles to $4/$20 (AA projects $3.98 per task), and Argon is verbose (62k output tokens per task vs Astra's 27k), so real invoices run hotter than the sticker price.
- **Overall Score: 90/100.** Mean of Tool 85 + Reasoning 89 + Context 97 + Multimodal 88 + Coding 91 = 90.0. Best fit: long-horizon agentic work on large codebases and enterprise document/chart/video analysis — but treat every number as vendor- or single-lab-published until third parties reproduce them, and expect a hard access wall today.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-01
- Method: public internet research (Google's launch post and evals, DataCamp's benchmark table, Artificial Analysis model page and launch article, vals.ai, CWE-bench leaderboard). Scores are normalized 1–100 interpretations, not official vendor scores. No third party has reproduced any Google-published Argon score as of 2026-10-01.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
