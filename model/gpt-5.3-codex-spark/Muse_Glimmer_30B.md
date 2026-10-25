# GPT-5.3-Codex-Spark — findings by Muse Glimmer 30B

- Source: OpenAI / gpt-5.3-codex-spark
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-5.3-Codex-Spark
- **Short description:** OpenAI research-preview low-latency coding variant distilled from GPT-5.3-Codex, optimized for real-time interactive software development with Cerebras wafer-scale serving. First in a family of ultra-fast Codex models.
- **Provider / access:** OpenAI. Research preview via ChatGPT Pro Codex app, CLI, VS Code extension; limited API access for design partners. Chat Completions / Responses API with WebSocket mode enabled by default.
- **Release / knowledge:** 2026-02-12 release preview; knowledge cutoff not publicly disclosed.
- **IDs:** `openai/gpt-5.3-codex-spark`
- **Context window:** 128,000 tokens total. Verified by OpenAI product announcement 2026-02-12 and Cerebras blog 2026-02-12.
- **Modalities:** Input text only; Output text only. Reasoning yes, tool calls supported in Codex workflows, JSON mode not explicitly documented. Multimodal input not supported at launch.
- **Pricing (as of 2026-10-25):** No public pricing. Research preview governed by separate rate limits and queuing; usage does not count toward standard limits. API access limited to design partners.
- **Architecture:** Proprietary distilled smaller model from GPT-5.3-Codex family. Not open-weights. Served on Cerebras Wafer Scale Engine 3 for latency-first inference.

### Raw benchmarks found

> Sources: OpenAI Introducing GPT-5.3-Codex-Spark 2026-02-12, Cerebras blog OpenAI GPT-5.3-Codex-Spark Powered by Cerebras 2026-02-12, CometAPI What is GPT-5.3-Codex-Spark 2026-03-10/2026-09-03 update, Turing College Codex 5.3 vs. Codex Spark: Speed vs. Intelligence 2026-02-14/updated 2026-06-04.
>
> Conflicting reporting: OpenAI states strong performance on SWE-Bench Pro and Terminal-Bench 2.0 with no numeric release, emphasizing duration reduction. Turing College independent analysis reports ~56% SWE-Bench Pro for Spark vs ~72% for Codex 5.3, indicating a capability drop for speed.

Agent / tool use:

- Terminal-Bench 2.0 / 2.1: no verified public score found — OpenAI cites strong performance on Terminal-Bench 2.0 but provides no numeric value.
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
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **~56%** SWE-Bench Pro estimated by Turing College 2026-02-14; OpenAI claims strong performance on SWE-Bench Pro with no numeric release. Conflict noted.
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- No long-context retrieval reported beyond context window size. OpenAI lists 128k window; no public MRCR / RULER / GraphWalks scores found.

### Normalized scores (1–100)

- **Tool use: 62/100.** OpenAI highlights strong Terminal-Bench 2.0 agentic performance but publishes no numbers; Turing notes unreliable tool-call formatting and schema drift. Capped by absence of verified public tool benchmarks.
- **Reasoning: 58/100.** No public GPQA/HLE scores. Distilled speed variant with reported reasoning drift after 6–8 steps per independent analysis. Capped by speed-focused distillation.
- **Context window: 70/100.** 128k tokens verified by OpenAI and Cerebras; competitive for coding workflows but well below 400k+ mainline Codex. No public long-context retrieval scores.
- **Multimodal: 15/100.** Text-only input/output at launch per OpenAI. No image/audio/video support.
- **Coding: 60/100.** Independent SWE-Bench Pro estimate ~56% vs ~72% for Codex 5.3 per Turing College; OpenAI claims strong performance without numeric disclosure. Capped by lack of verified LiveCodeBench/SWE-Verified numbers.
- **Cost efficiency: 65/100.** No public pricing; research preview with separate rate limits. >1,000 tokens/sec on Cerebras improves effective latency cost for interactive use, but limited access and undisclosed pricing cap score.
- **Overall Score: 53/100.** Mean of five quality dims (62+58+70+15+60)/5 = 53.0. Best-fit: ultra-fast interactive coding assistant for targeted edits and prototyping; complementary to full Codex for complex reasoning.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
