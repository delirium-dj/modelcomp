# GPT-6 Sol — findings by Muse Spark 1.2

- Source: OpenAI (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI cost-efficient GPT-6 sibling (2026-09-22) delivering ~90% of Astra's capability at 20% token cost; optimized for agentic coding and business workflows.
- **Provider / access:** OpenAI API `openai/gpt-6-sol` via OpenCode Zen `openai/gpt-6-sol` (Chat Completions via adapter) and ChatGPT Work/Codex; also Azure/Bedrock
- **Release / knowledge:** 2026-09-22; knowledge cutoff 2026-04-20
- **IDs:** `openai/gpt-6-sol` (no Free tier; paid only)
- **Context window:** 1,050,000 total (1,050,000 in / 128,000 out) — verified via OpenAI API docs (openai.com) and docsbot.ai; Artificial Analysis reports 872k usable
- **Modalities:** Text, image in; text out; reasoning yes (none/low/medium/high/xhigh/max); tool calls yes; JSON mode yes — no audio/video/PDF in
- **Pricing (as of 2026-09-24):** $2.00 in / $10.00 out per 1M; cached $0.20; cache-write $2.50/M; long-context >272k tokens 2x in / 1.5x out surcharge; Batch/Flex 50% standard, Fast 2x
- **Architecture:** Proprietary (GPT-6 family, distilled from Astra)

### Raw benchmarks found

Agent / tool use:

- AutomationBench 1.0.6: **33.2% at xhigh (32.0% at max)** (OpenAI launch post 2026-09-22; beats Claude Opus 5 max 26.9% at 9% cost; AA independent 61.6% rank #14)
- Agents' Last Exam V1: **56.4% at max** (OpenAI — above Opus 5 best at 60% lower cost; BenchLeader confirms 56.4% max)
- OSWorld 2.0 offline: **64.4% at max (60.5% at xhigh)** (OpenAI; similar to Opus 5 medium 60.3% at 80% lower cost)
- Terminal-Bench 2.1 / 4.0: **no verified public score found** (not reported for Sol; Opus 5.5 reports 66.4% on TB4.0)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA v2.1: **49.4% at max (GDPval-AA, Artificial Analysis via BenchLeader)** — rank #35; AA-Briefcase 1483 rank #26
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (not isolated for Sol)
- HLE (Humanity's Last Exam): **47.9% at max (43.0% avg, 18.4% no-reasoning)** (Artificial Analysis via BenchLeader, rank #25 at max)
- LCR / MLCR: **AA-LCR 83.7% at max/high, MLCR 16.1%** (Artificial Analysis via BenchLeader, rank #14 LCR)
- CritPt: **30.9% at max (4.0% no-reasoning)** (Artificial Analysis via BenchLeader, rank #7)
- Artificial Analysis Intelligence Index: **47.5 at max (48 max effort, 28.1 no-reasoning)** (Artificial Analysis — rank #18 at max; 44.1 xhigh, 42.8 high)
- Omniscience Accuracy / Hallucination Rate: **54.5% accuracy / 39.9% non-hallucination (AA-Omniscience 27.1)** (Artificial Analysis via BenchLeader) / Factual error rate 4.5% xhigh (OpenAI internal difficult prompts)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (not published for Sol)
- LiveCodeBench: **no verified public score found** (not published for Sol)
- SciCode / AA-SciCode: **no verified public score found** (SciCode not isolated; AA SciCode pending)
- Vibe Code Bench: **no verified public score found**
- DeepSWE v1.1: **68.8% at max (66.6% xhigh, 65.3% high, 56.6% medium)** (OpenAI launch post — within 1.1pp of Fable 5 69.9% xhigh at 80% lower cost; trails GPT-5.6 Sol 72.7% max)
- FrontierCode 1.1 Main: **49.3% at max (48.4% xhigh, 47.7% high)** (OpenAI — matches Fable 5.1 xhigh 50.3% at 1/6 cost; trails Opus 5.5 54.4% and Astra 53.3%)
- BenchLeader Composite: **86 at max / 82 xhigh / 81 high** (BenchLeader Index coding-weighted proxy)

Long context:

- AA-LCR 83.7% at 1M window (rank #14) and MLCR 16.1% rank #24 (Artificial Analysis via BenchLeader); 1.05M demonstrated for whole-repo tasks; supports long-context surcharge >272k

### Normalized scores (1–100)

- **Tool use: 86/100.** AutomationBench 33.2% xhigh beating Opus 5 26.9% but trailing Astra 41.4% and Opus 5.5 40.0%; Agents' Last Exam 56.4% above Opus 5; capped by missing TB4.0 and no shared-harness win vs Opus 5.5.
- **Reasoning: 88/100.** AA Index 47.5-48 (rank #18), HLE 47.9% rank #25, CritPt 30.9% rank #7 top-10, LCR 83.7%; capped by regression vs GPT-5.6 Sol on GDPval (-100 Elo) and no GPQA isolation.
- **Context window: 96/100.** 1,050,000 total (128K out) verified via OpenAI docs; tier 95-100 for ≥1M but capped below 100 vs proven 1M retrieval 83.7% not 90%+.
- **Multimodal: 65/100.** Text+image in only → text out; strong but capped below 75 by no audio/video/PDF input vs frontier multimodal models.
- **Coding: 84/100.** DeepSWE 68.8% near Fable 5 69.9% but trails Opus 5 73.7% and own predecessor 72.7%; FrontierCode 49.3% solid but behind Opus 5.5 54.4%; capped by no SWE-bench Verified publication.
- **Cost efficiency: 55/100.** Paid-only $2/$10 (50% cut from GPT-5.6 Sol); cheap vs Astra $10/$50 and Opus 5.5 $4/$20, but 200× cost of Luna $0.10/$0.50 and $0 Free tiers.
- **Overall Score: 84/100.** Mean of five non-cost dims (86+88+96+65+84)/5=83.8 → 84; best-fit cost-efficient agentic coder when peak coding not required.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-24
- Method: public internet research (OpenAI 2026-09-22 launch post, docsbot.ai, Artificial Analysis Intelligence Index v4.3.2, BenchLeader 2026-09-22, emergent.sh/metrics, the-decoder.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
