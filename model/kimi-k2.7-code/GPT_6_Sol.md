# Kimi K2.7 Code — findings by GPT 6 Sol

- Source: Moonshot AI (`kimi-k2.7-code`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Coding-focused open-weight agentic MoE built on Kimi K2.6, tuned for long-horizon engineering; distinct from general-purpose K2.6 and the high-speed hosted variant ([Moonshot card](https://huggingface.co/moonshotai/Kimi-K2.7-Code)).
- **Provider / access:** `kimi-k2.7-code` on [Moonshot](https://huggingface.co/moonshotai/Kimi-K2.7-Code) via OpenAI-compatible Chat Completions or Anthropic-compatible API; [OpenCode Console](https://opencode.ai/docs/zen/) `opencode/kimi-k2.7-code` uses Chat Completions; open weights `moonshotai/Kimi-K2.7-Code`.
- **Release / knowledge:** [Vals](https://www.vals.ai/models/kimi_kimi-k2.7-code) records June 12, 2026; knowledge cutoff not published in reviewed card.
- **IDs:** `kimi-k2.7-code` / `opencode/kimi-k2.7-code` / `moonshotai/Kimi-K2.7-Code`; no verified Free Console ID.
- **Context window:** [Moonshot](https://huggingface.co/moonshotai/Kimi-K2.7-Code) 262,144 tokens (256K); [Vals](https://www.vals.ai/models/kimi_kimi-k2.7-code) says 256K max output under its testing, not a guaranteed gateway output ceiling.
- **Modalities:** Text and images; video supported on official Moonshot API but experimental/unsupported in self-hosted third-party inference; text output, mandatory thinking and preserved multi-turn thinking, interleaved tool calling ([card](https://huggingface.co/moonshotai/Kimi-K2.7-Code)). No audio I/O demonstrated.
- **Pricing (as of 2026-10-16):** [OpenCode Console](https://opencode.ai/docs/zen/) **$0.95 input / $4 output / $0.19 cached read per million**; independent self-hosting requires compute.
- **Architecture:** [Moonshot](https://huggingface.co/moonshotai/Kimi-K2.7-Code) 1T total / 32B active MoE, MoonViT 400M vision encoder, Modified MIT weights.

### Raw benchmarks found

Moonshot's card used thinking-enabled Kimi Code CLI, temperature 1/top-p .95 and 262,144 context unless noted; Vals measured its own Moonshot-provider setup. Do not merge harnesses into a single pass rate.

Agent / tool use:

- [Moonshot MCP Atlas **76.0%** (100-call budget), MCP Mark Verified **81.1%** (100 steps), Kimi Claw 24/7 **46.9%** (17 scenarios)](https://huggingface.co/moonshotai/Kimi-K2.7-Code). [Artificial Analysis τ²-bench **90.1%**, GDPval-AA **1114 Elo**](https://benchlm.ai/models/kimi-k2-7-code); [Vals Terminal-Bench 2.1 **67.04% ±0.38**, SkillsBench **50.04% ±4.24**, Code Migration **25.39% ±4.16**](https://www.vals.ai/models/kimi_kimi-k2.7-code).

Reasoning / knowledge:

- [Artificial Analysis GPQA Diamond **89.6%**, HLE **35.0%**, CritPt **10.0%**, Omniscience accuracy **39.6%**, hallucination rate **82.4%**, AA Index **25.8**](https://benchlm.ai/models/kimi-k2-7-code). High hallucination rate materially limits unverified-answer use.

Coding:

- [Moonshot Kimi Code Bench v2 **62.0%**, Program Bench **53.6%**, MLS-Bench Lite **35.1%**](https://huggingface.co/moonshotai/Kimi-K2.7-Code); [Vals SWE-bench **78.20% ±1.85**, LiveCodeBench **82.05% ±1.07**, Vibe Code Bench v1.1 **47.21% ±5.19**, TB2.1 **67.04%**](https://www.vals.ai/models/kimi_kimi-k2.7-code). [CursorBench 3.2 **49.7%**](https://benchlm.ai/models/kimi-k2-7-code). Vals ProgramBench **0%** uses a different setup/measurement than Moonshot's Program Bench **53.6%**; leave this disagreement explicit.

Long context:

- [Artificial Analysis AA-LCR **79.3%**](https://benchlm.ai/models/kimi-k2-7-code), with [262,144-token model context](https://huggingface.co/moonshotai/Kimi-K2.7-Code); no exact 256K MRCR eight-needle figure verified.

### Normalized scores (1–100)

- **Tool use: 77/100.** MCP 76–81%, τ² 90.1%, TB2.1 67%; Claw 46.9% and migration 25.4% restrain autonomous reliability.
- **Reasoning: 75/100.** GPQA 89.6%, HLE 35% and CritPt 10%, capped by AA hallucination 82.4%.
- **Context window: 84/100.** Native 256K, AA-LCR 79.3%; no demonstrated near-limit retrieval score.
- **Multimodal: 70/100.** Image and official-API video input but no audio I/O and no verified visual reasoning benchmark for this exact Code variant.
- **Coding: 83/100.** SWE 78.2%, TB2.1 67% and LCB 82%, moderated by Vibe Code 47% and conflicting ProgramBench setups.
- **Cost efficiency: 79/100.** $0.95/$4 and $0.19 cached read, open weights; higher output cost than many open-weight alternatives.
- **Overall Score: 78/100.** (77 + 75 + 84 + 70 + 83) / 5 = 77.8, half-up 78; strong coding agent when harness and provider are chosen deliberately.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-16
- Method: Compared first-party model card and Console listing with Vals and AA-attributed public results, preserving provider/harness differences; scores are normalized interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
