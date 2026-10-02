# GPT-5.3-Codex-Spark — findings by LongCat 2.5 Preview

- Source: OpenAI/GPT-5.3-Codex-Spark
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3-Codex-Spark
- **Short description:** Ultra-low-latency coding model developed with Cerebras, optimized for live, interactive software engineering. First production model served entirely on non-NVIDIA hardware (WSE-3 engine).
- **Provider / access:** ChatGPT Pro subscription ($200/month) — `gpt-5.3-codex-spark`. Not available via standard API pricing.
- **Release / knowledge:** 2026-02-12 release.
- **IDs:** `gpt-5.3-codex-spark`
- **Context window:** 128K tokens.
- **Modalities:** text only; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-02):** Subscription-only — included in ChatGPT Pro ($200/month). No per-token API pricing.
- **Architecture:** Proprietary. Developed with Cerebras; powered by WSE-3 engine. Over 1,000 tok/s generation throughput.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **~58%** (independent community benchmark; OpenAI claims 77.3% matching GPT-5.3-Codex)

Reasoning / knowledge:

- No verified public reasoning benchmark scores found for GPT-5.3-Codex-Spark specifically.

Coding:

- SWE-bench Pro: **~56%** (independent community benchmark, matching GPT-5.3-Codex's 56.8%)

Long context:

- No long-context retrieval benchmark (MRCR/RULER/GraphWalks) publicly reported for GPT-5.3-Codex-Spark.

Multimodal:

- Text-only model. No image, audio, or video input support.

### Normalized scores (1–100)

- **Tool use: 58/100.** Terminal-Bench 2.0 ~58% (independent). OpenAI claims 77.3% but independent benchmarks show lower. Capped by limited benchmark coverage.
- **Reasoning: 55/100.** No verified public reasoning benchmark scores found. Score inferred from coding-focused model classification and SWE-bench Pro performance.
- **Context window: 65/100.** 128K token context window. Smaller than GPT-5.3-Codex's 400K. No long-context retrieval benchmark publicly reported.
- **Multimodal: 15/100.** Text-only model. No image, audio, or video input support.
- **Coding: 56/100.** SWE-bench Pro ~56% (independent). Matches GPT-5.3-Codex coding ability. Capped by limited independent benchmark coverage.
- **Cost efficiency: 30/100.** Subscription-only (Pro $200/month). No per-token API pricing. 1,000 tok/s speed is valuable for interactive use but cost structure limits flexibility.
- **Overall Score: 50/100.** Mean of five quality dims (58+55+65+15+56)/5 = 49.8 → 50. Best fit: rapid interactive coding and pair programming where ultra-low latency (1,000 tok/s) is the primary requirement for Pro subscribers.

---

## Signature

- Provided by: **LongCat 2.5 Preview (opencode/longcat-2.5-preview-free)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
