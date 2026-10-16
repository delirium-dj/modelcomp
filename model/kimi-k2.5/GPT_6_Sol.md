# Kimi K2.5 — findings by GPT 6 Sol

- Source: Moonshot AI (`kimi-k2.5`)
- Date: 2026-10-15 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's January 2026 open-weight visual coding/agentic MoE with optional thinking and multimodal agent-swarm product orchestration, distinct from K2.6 ([official model card](https://huggingface.co/moonshotai/Kimi-K2.5)).
- **Provider / access:** Official `kimi-k2.5` on Moonshot API (OpenAI-compatible **Chat Completions** and Anthropic-compatible Messages), downloadable `moonshotai/Kimi-K2.5` Modified MIT weights ([card](https://huggingface.co/moonshotai/Kimi-K2.5)); [OpenCode Console](https://opencode.ai/docs/zen/) lists a **paid** `kimi-k2.5` Chat Completions route, no verified free Zen ID.
- **Release / knowledge:** January 26, 2026 per [Vals](https://www.vals.ai/models/kimi_kimi-k2.5-thinking); knowledge cutoff not precisely stated in reviewed checkpoint card.
- **IDs:** `kimi-k2.5` first-party and `moonshotai/Kimi-K2.5` weights; thinking and instant modes share a checkpoint but results are not interchangeable across settings.
- **Context window:** [Moonshot card](https://huggingface.co/moonshotai/Kimi-K2.5) **262,144 native**; [Vals](https://www.vals.ai/models/kimi_kimi-k2.5-thinking) used 128K max output for most tests, up to 256K in coding. Project metadata's 65K output is not a universal limit.
- **Modalities:** Native text/image input and **video through official Moonshot API only** (self-hosted video chat marked experimental) → text output, tool calling and thinking/instant modes ([Moonshot card](https://huggingface.co/moonshotai/Kimi-K2.5)). No native audio I/O.
- **Pricing (as of 2026-10-15):** [Vals](https://www.vals.ai/models/kimi_kimi-k2.5-thinking) and [OpenCode Console](https://opencode.ai/docs/zen/) **$0.60 input / $3 output per 1M**, Console cache read **$0.10**. Downloadable Modified MIT weights allow self-hosting with compute expense.
- **Architecture:** [Moonshot](https://huggingface.co/moonshotai/Kimi-K2.5) **~1T total / 32B active** sparse MoE with 400M MoonViT encoder and MLA context; 100-agent swarm is a separate product harness, not a 100-model ensemble weight count.

### Raw benchmarks found

Moonshot's [thinking-model official eval table](https://huggingface.co/moonshotai/Kimi-K2.5) uses 256K context and controlled tool/scaffold variations; independent [Vals](https://www.vals.ai/models/kimi_kimi-k2.5-thinking) uses its own thinking setup, and [BenchLM](https://benchlm.ai/models/kimi-k2-5-reasoning) attributes AA numbers. For Moonshot SWE/terminal, model card notes *non-thinking mode* gave highest coding scores, so do not present them as thinking-mode results.

Agent / tool use:

- [Moonshot BrowseComp **60.6% baseline / 74.9% with context management / 78.4% with agent swarm**, WideSearch **72.7% single / 79.0% swarm**](https://huggingface.co/moonshotai/Kimi-K2.5). [Independent Claw-Eval](https://claw-eval.github.io/) and [OSWorld-Verified **63.3%**](https://os-world.github.io/) as catalogued in [BenchLM](https://benchlm.ai/models/kimi-k2-5-reasoning).
- [Vals Terminal-Bench 2.1 **41.95% ±0.75**, Finance Agent v2 **35.79% ±1.99**, Code Migration **6.96% ±1.29**, Harvey Legal Agent **0.00%**, SAGE **49.87% ±3.36**](https://www.vals.ai/models/kimi_kimi-k2.5-thinking). No exact-ID TB4.0 verified in reviewed results.

Reasoning / knowledge:

- [Moonshot GPQA Diamond **87.6%**, HLE Full **30.1% without tools / 50.2% with tools**, AIME 2025 **96.1%**](https://huggingface.co/moonshotai/Kimi-K2.5); [Vals GPQA **84.09% ±2.13**, MMLU Pro **85.91% ±0.34**](https://www.vals.ai/models/kimi_kimi-k2.5-thinking); [AA CritPt **3.1%**, HLE **30.7%**, AA Index **23.5**](https://benchlm.ai/models/kimi-k2-5-reasoning).

Coding:

- [Moonshot SWE-bench Verified **76.8%**, SWE-Pro **50.7%**, Terminal-Bench 2.0 **50.8%**, SciCode **48.7%**, LiveCodeBench v6 **85.0%**](https://huggingface.co/moonshotai/Kimi-K2.5) under its coding setup (highest scores under *non-thinking*). [Vals SWE-bench **70.00% ±2.05**, LiveCodeBench **83.87% ±1.03**, Vibe Code Bench v1.1 **17.54% ±3.26**, TB2.1 **41.95%**](https://www.vals.ai/models/kimi_kimi-k2.5-thinking).

Long context / multimodal:

- [Moonshot 256K native and LongBench v2 **61.0%** on ~128K prompts](https://huggingface.co/moonshotai/Kimi-K2.5), [AA-LCR **78.0%**](https://benchlm.ai/models/kimi-k2-5-reasoning); no 256K-specific MRCR eight-needle result independently verified.
- [Moonshot MMMU-Pro **78.5%**, CharXiv **77.5%**, OCRBench **92.3%**, VideoMMMU **86.6%**, VideoMME **87.4%**](https://huggingface.co/moonshotai/Kimi-K2.5); [Vals MMMU-Pro **84.33% ±0.87**](https://www.vals.ai/models/kimi_kimi-k2.5-thinking). Hosted video support depends on official API.

### Normalized scores (1–100)

- **Tool use: 67/100.** BrowseComp context-managed 74.9%, OSWorld-Verified 63.3%; Vals TB2.1 42%, migration 7%, Harvey 0% limit real autonomy.
- **Reasoning: 77/100.** GPQA ~84–88%, HLE 30% no tools and CritPt 3.1% are solid at its generation but below current frontier.
- **Context window: 85/100.** Native 256K and AA-LCR 78%, no exact 256K MRCR; agent swarm's longer effective work is not a longer single context.
- **Multimodal: 87/100.** Strong image/video understanding (VideoMMMU 86.6%) on official API; no speech/audio input and self-host video experimental.
- **Coding: 72/100.** SWE Verified 70–77%, Pro 50.7%, TB2.1 42% and Vibe Code 17.5%; mode/harness distinctions matter.
- **Cost efficiency: 82/100.** Hosted $0.60/$3 with $0.10 cache and open weights, subject to self-host compute and provider support.
- **Overall Score: 78/100.** (67 + 77 + 85 + 87 + 72) / 5 = 77.6, half-up 78; useful open-weight visual agent for bounded tasks with native-vs-host video and thinking setup checked.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-15
- Method: Fresh Moonshot checkpoint card compared with Vals thinking and AA-attributed measures, coding-mode caveat preserved; normalized scores are interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
