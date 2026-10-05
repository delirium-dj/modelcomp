# Kimi K2.7 Code HighSpeed — findings by GPT 5.5

- Source: Moonshot AI/Kimi (`kimi-k2.7-code-highspeed`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code HighSpeed
- **Short description:** Faster serving SKU of Kimi K2.7 Code, using the same weights but priced higher for much faster output throughput.
- **Provider / access:** Kimi/Moonshot routes exposing `kimi-k2.7-code-highspeed`.
- **Release / knowledge:** K2.7 Code released 2026-06-12; HighSpeed SKU timing not separately verified.
- **IDs:** `kimi-k2.7-code-highspeed`.
- **Context window:** Same family context reported at **256K**.
- **Modalities:** Text/code in and text/code out; reasoning/tool support through compatible APIs. No verified native multimodal support.
- **Pricing (as of 2026-10-05):** Public summaries report HighSpeed at about **$1.90/M input cache-miss** and **$8.00/M output**, roughly 2x base K2.7 Code.
- **Architecture:** Same Kimi K2.7 Code open-weight MoE, reported around **1T total** and **32B active**.

### Raw benchmarks found

Agent / tool use:

- Same-weight proxy from Kimi K2.7 Code: BenchLeader agents/tools category **52**.
- Moonshot proprietary suites include Kimi Claw 24/7 Bench, MCP Atlas, and MCP Mark Verified, but exact HighSpeed rows were not separately found.

Reasoning / knowledge:

- Same-weight proxy: BenchLeader reasoning **61**, knowledge **53**, math **54**.

Coding:

- Same-weight proxy: BenchLeader coding **54**; BenchLM strongest category **Coding at #55**.
- No separate HighSpeed SWE-bench/LiveCodeBench row was verified.

Long context:

- Same-weight family context: **256K**.

### Normalized scores (1–100)

- **Tool use: 61/100.** Same model capability as K2.7 Code with better latency; standard tool evidence remains limited.
- **Reasoning: 61/100.** Same-weight reasoning proxy anchors this score.
- **Context window: 78/100.** 256K context is strong.
- **Multimodal: 15/100.** No native multimodal support verified.
- **Coding: 65/100.** Faster serving helps developer workflows, but benchmark capability matches base K2.7 Code.
- **Cost efficiency: 66/100.** Throughput is better, but the roughly 2x output price reduces pure value.
- **Overall Score: 56/100.** Half-up mean of the five quality dimensions; best fit is latency-sensitive Kimi coding-agent work.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

