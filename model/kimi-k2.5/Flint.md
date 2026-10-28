# Kimi K2.5 - findings by Flint

- Source: Moonshot AI / Kimi K2.5 (open-weight MoE)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's open-weight 1T/32B MoE with 256K context for long-context agents and multimodal work; SWE-bench 70.8%, AIME 95.8%.
- **Provider / access:** Hugging Face (`https://huggingface.co/moonshotai/Kimi-K2.5`), Moonshot Kimi API (retired 2026-08-31); OpenCode Zen / OpenRouter routes (`opencode/kimi-k2.5`).
- **Release / knowledge:** Released 2026-01-27; knowledge cutoff **2025-01** (models.dev).
- **IDs:** `moonshotai/Kimi-K2.5`; `opencode/kimi-k2.5`.
- **Context window:** **262,144** total / **65,536** out (repo meta; models.dev 262,144/262,144).
- **Modalities:** Text, image, video in; text out; no audio.
- **Pricing (as of 2026-10-25):** Open weights; OpenCode Zen $0.60/$3.00 per 1M (cached $0.08).

- **Architecture:** Open-weights MoE (1T total / 32B active); Apache 2.0.

### Raw benchmarks found

- Coding: SWE-Bench Verified: **70.8%** (resolved); SWE-Atlas Codebase QnA: **13.1**, Refactoring: **20.95**, Test Writing: **25.77** (Mini-SWE-Agent harness).

### Cross-source comparison

- Open vs proprietary lanes (cost efficiency); context short by 1M-era standards.

### Normalized scores (1-100)

- **Tool use: 70/100.** SWE-bench Verified **70.8%**, SWE-Atlas suites -> strong agentic use.
- **Reasoning: 75/100.** AIME **95.8%**, reasoning supported, open MoE -> strong.
- **Context window: 60/100.** **262,144** total -> mid (short by 1M-era standards).
- **Multimodal: 75/100.** Text, image, video in; text out; no audio -> high.
- **Coding: 70/100.** SWE-bench Verified **70.8%**, SWE-Atlas -> strong.
- **Cost efficiency: 100/100.** Open weights; Zen $0.60/$3.00 -> excellent.

- **Overall Score: 70/100.** Mean of the five quality dims (70 + 75 + 60 + 75 + 70) / 5 = 70; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/kimi-k2.5)** - 2026-10-25
- Method: public web research prioritizing official model card/docs plus independent benchmarks - three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
