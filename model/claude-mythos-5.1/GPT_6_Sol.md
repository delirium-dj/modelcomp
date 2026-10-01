# Claude Mythos 5.1 — findings by GPT 6 Sol

- Source: Anthropic (`claude-mythos-5-1`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1 (invite-only; no Free tier).
- **Short description:** Anthropic’s restricted-access model for vetted cybersecurity and life-sciences work. It shares underlying weights with Claude Fable 5.1 but has different safeguards; **Fable results are not treated as Mythos results below**.
- **Provider / access:** Anthropic Claude **Messages API** (`claude-mythos-5-1`), not a Chat Completions or Responses endpoint; also listed for Amazon Bedrock (`anthropic.claude-mythos-5-1`), Google Cloud and Microsoft Foundry (`claude-mythos-5-1`). Access requires approval; OpenCode Zen does not list Mythos 5.1.
- **Release / knowledge:** Released 2026-09-01; reliable-knowledge and training-data cutoffs: June 2026, with no day specified.
- **IDs:** `anthropic/claude-mythos-5-1` (Anthropic API model ID: `claude-mythos-5-1`). **No OpenCode Zen or Free ID exists in its published model list.**
- **Context window:** **1M tokens total**, including input and output; **128K maximum output**. These are Anthropic’s published limits, not measured retrieval accuracy.
- **Modalities:** Text and images in; PDFs can be processed as documents; text out. No native audio or video modality is specified. Always-on adaptive reasoning, automatic tool calls, and structured JSON outputs/strict tool schemas are supported; forced tool choice is not.
- **Pricing (as of 2026-10-01):** Paid, per 1M tokens: **$10 input / $50 output / $0.25 cache read**; cache writes **$12.50** for five-minute or **$20** for one-hour retention. No Free tier; use ordinarily requires **30-day data retention**, with zero-data-retention access only if Anthropic expressly authorizes it.
- **Architecture:** Proprietary; total/active parameter counts and MoE status are not publicly disclosed. No open weights or open-weights license are published.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: **77% correct / 20% incorrect** on closed-book AA-Omniscience—not a general-purpose hallucination rate; **0.57 net score**, BenchmarkList **rank 2 of 7**, from Anthropic’s Mythos 5.1 system-card result. Other exact-model reasoning evidence: ArXivMath, **91.33% without tools / 93.88% with tools**, Anthropic’s June 2026 problem set, maximum effort, four runs per problem; BenchmarkList lists the rounded result **rank 1 of 23**.

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: DeepSWE and Coding Index: no verified public score found. **Terminal-Bench 4.0: 60.9%** for _Mythos 5.1_, Anthropic’s Claude Code `--bare` harness at maximum thinking effort, averaged over ten trials per task; BenchmarkList **rank 1 of 10**. **Terminal-Bench 4.0 is not Terminal-Bench 2.1.**

Long context:

- no long-context retrieval reported; Anthropic’s published 1M-token capacity does not establish an MRCR, RULER or GraphWalks score.

### Normalized scores (1-100)

- **Tool use: 80/100.** Strong exact-model Terminal-Bench 4.0 result; no verified Terminal-Bench 2.1, Tau or GDPval-AA result to justify a higher cross-benchmark rating.
- **Reasoning: 82/100.** ArXivMath and AA-Omniscience provide direct evidence; missing exact-model GPQA, HLE and Intelligence Index results cap confidence.
- **Context window: 95/100.** Verified 1M-token tier; no verified retrieval result at 512K or beyond for the tier’s 100-point threshold.
- **Multimodal: 82/100.** Text, image and PDF input with text output; no verified native audio/video input or non-text model output.
- **Coding: 84/100.** Terminal-Bench 4.0 leads the reported comparison, but exact-model SWE-bench, DeepSWE and LiveCodeBench scores are unverified.
- **Cost efficiency: 30/100.** Evaluated at Anthropic’s paid **$10 input / $50 output** per 1M-token tier; caching can reduce applicable input charges.
- **Overall Score: 84.6/100.** `(80 + 82 + 95 + 82 + 84) / 5 = 84.6`; cost is excluded. Best fit: approved organizations needing its cybersecurity or life-sciences safeguards; it is not generally available.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-01
- Method: Fresh public-web research across Anthropic documentation and published evaluations, BenchmarkList, BenchLM and OpenCode Zen. Scores are normalized 1–100 interpretations, not official vendor scores; Fable-only benchmark results were not copied to Mythos.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
