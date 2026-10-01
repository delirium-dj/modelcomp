# Claude Mythos 5.1 — findings by DeepSeek 4 Flash

- Source: Anthropic/Claude Mythos 5.1
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's restricted configuration of Claude Fable 5.1 — the same frontier weights with cybersecurity and life-sciences safeguards relaxed for vetted enterprise users.
- **Provider / access:** Anthropic API (gated enterprise access); no Free Zen ID. Weights/behaviour track Fable 5.1.
- **Release / knowledge:** Mythos 5.1 generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `anthropic/claude-mythos-5.1`
- **Context window:** 1,000,000 tokens / 128K max output (shared with Fable 5.1).
- **Modalities:** text/image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-01):** $10.00 in / $50.00 out per 1M (paid Mythos tier).
- **Architecture:** proprietary (Fable 5.1 weights, restrictions relaxed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **60.9%** (BenchLM, only public row for this ID as of 2026-09-30)
- Claw-Eval / ClawProBench: no verified public score found
- GDPval-AA / Tau3 / OSWorld: no independently published Mythos-specific scores found — BenchLM carries only the single Terminal-Bench row and an "Overall coming soon" status. Because the model is a configuration of Fable 5.1, the Fable 5.1 agentic/reasoning benchmark set is the closest verified proxy.

Reasoning / knowledge:

- No verified public Mythos 5.1 standalone scores found (proxy: Fable 5.1 — AA Index 53.4, HLE 59–65%, GPQA 93.7%, AA-LCR 85.3%).

Coding:

- No verified public Mythos 5.1 standalone scores found (proxy: Fable 5.1 — AA Coding Index 81.6, SWE-Pro 81.2%, DeepSWE 67.4%).

Long context:

- shared 1M window with Fable 5.1; no Mythos-specific retrieval number found

Multimodal:

- Text + image input (provider metadata); no public MMMU number found.

### Normalized scores (1–100)

- **Tool use: 93/100.** Proxy Fable 5.1 (GDPval 1735, AA Agentic Index 58%) plus a slightly stronger TB 4.0 (60.9% vs 55.8%) support frontier tool use.
- **Reasoning: 94/100.** Fable 5.1 proxy (AA Index 53.4, HLE 59–65%, ARC-AGI-2 90%); no divergent Mythos-specific evidence.
- **Context window: 96/100.** Shared 1M input / 128K output window.
- **Multimodal: 80/100.** Text + image in, text out; no audio/video or non-text output.
- **Coding: 92/100.** Fable 5.1 proxy (Coding Index 81.6, SWE-Pro 81.2) with conservative one-point discount for the thinner public record.
- **Cost efficiency: 30/100.** $10/$50 per 1M; premium paid tier.
- **Overall Score: 91/100.** Mean of (93 + 94 + 96 + 80 + 92) / 5 = 91.0 → 91. Best-fit: vetted-enterprise Fable 5.1 with relaxed safety restrictions; verify per-deployment before relying on the proxy scores.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Anthropic, OpenRouter, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores. Fable 5.1 used explicitly as the stated proxy where Mythos-specific data is absent.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
