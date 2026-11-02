# Kimi K2.5 — findings by GPT 5.6 Luna

- Source: Moonshot AI / Kimi K2.5
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot's open native-multimodal agent model, with visual coding, thinking/instant modes, and a self-directed agent-swarm design. It is distinct from Kimi K2.7 Code and from the separate K2.5 reasoning profile.
- **Provider / access:** Kimi.com, Kimi Code, and the Kimi API, which offers OpenAI- and Anthropic-compatible interfaces. The current Kimi pricing notice says K2-series access is restricted for newly registered users from 2026-10-31 and is planned for retirement by the end of December 2026.
- **Release / knowledge:** Open-sourced in January 2026; a reliable knowledge cutoff was not published.
- **IDs:** Weights `moonshotai/Kimi-K2.5`; API model family `kimi-k2.5`.
- **Context window:** 256K tokens in the official model card and its evaluations; Kimi's current K2 API documentation describes the service limit as 262,144 tokens.
- **Modalities:** Text, image, and video input; text output; thinking or instant mode; search, browser, code-interpreter, and other tool workflows.
- **Pricing (as of 2026-11-02):** The current Kimi K2 pricing page confirms 262,144-token K2 limits but does not render a K2.5 token-price row in the reviewed page, so an exact current API rate is not verified. The weights use a modified MIT license; service availability is being wound down.
- **Architecture:** 1T-total / 32B-activated MoE with 384 experts, eight selected experts per token, MLA attention, and a 400M MoonViT vision encoder; modified MIT license.

### Raw benchmarks found

> The official model card uses thinking mode, a 256K context, and benchmark-specific averaged runs. BenchLM's 2026-10-29 profile is partial corroboration; its inherited or third-party rows are labelled rather than treated as a replacement for the exact card.

Agent / tool use:

- Terminal-Bench 2.0: **50.8%**; BrowseComp: **60.6%**; WideResearch: **72.7%** (Moonshot model card).
- BrowseComp with the agent swarm: **78.4%**; the swarm can coordinate up to **100 sub-agents** and **1,500 tool calls** (Moonshot model card).
- Claw-Eval: **52.3%**; Toolathlon: **27.8%**; MCP Atlas: **29.5%** (current BenchLM profile, with the cited leaderboard/model-card sources).
- Artificial Analysis tau2-bench: **95.9%**; GDPval-AA: **936 Elo** (BenchLM/Artificial Analysis; independent harness).

Reasoning / knowledge:

- HLE full: **30.1%** without tools and **50.2%** with tools in the card's main table. The card also breaks the result out as **31.5% text / 21.3% image** without tools and **51.8% text / 39.8% image** with tools.
- GPQA-Diamond: **87.6%**; MMLU-Pro: **87.1%**; AIME 2025: **96.1%**; HMMT Feb 2025: **95.4%** (Moonshot model card).
- Artificial Analysis Intelligence Index: **23.5**; AA-LCR: **78.0%**; CritPt: **3.1%**; AA omniscience accuracy / hallucination rate: **35.2% / 65.7%** (BenchLM/Artificial Analysis).

Coding:

- SWE-bench Verified: **76.8%**; SWE-bench Pro: **50.7%**; SWE Multilingual: **73.0%**; LiveCodeBench v6: **85.0%**; SciCode: **48.7%** (Moonshot model card).
- The card's Terminal-Bench 2.0 result is **50.8%** under its stated default agent framework; current Vals/BenchLM rows use the same benchmark name but different serving/evaluation conditions.

Multimodal:

- MMMU-Pro: **78.5%**; MathVision: **84.2%**; CharXiv: **77.5%**; OmniDocBench 1.5: **88.8%**; Video-MME: **87.4%**; SimpleVQA: **71.2%** (Moonshot model card).

Long context:

- Official context: **256K**. LongBench v2: **61.0%** and AA-LCR: **78.0%**; no exact full-window MRCR/RULER retrieval curve was verified.

### Normalized scores (1–100)

- **Tool use: 83/100.** Agent-swarm BrowseComp and high tau2-bench results are strong, but Terminal-Bench 50.8%, MCP Atlas 29.5%, and Toolathlon 27.8% show uneven autonomous execution.
- **Reasoning: 82/100.** GPQA 87.6%, AIME 96.1%, and tool-assisted HLE 50.2% are strong; HLE without tools, the low AA index, and the 65.7% hallucination rate cap reliability.
- **Context window: 78/100.** The verified 256K window and 78% AA-LCR result are useful, but it is below the 1M tier and has no full-window retrieval curve.
- **Multimodal: 91/100.** Native image/video input and strong Video-MME, document, OCR, and math-vision results support a high score; no audio input or non-text output was verified.
- **Coding: 81/100.** SWE-bench Verified 76.8% and LiveCodeBench 85.0% are strong, while SWE-Pro 50.7%, Terminal-Bench 50.8%, and SciCode 48.7% prevent a frontier score.
- **Cost efficiency: 90/100.** Open weights and broad deployment are valuable, but the current API rate is not verified and K2 service retirement reduces practical availability.
- **Overall Score: 83/100.** `(83 + 82 + 78 + 91 + 81) / 5 = 84.2`; best fit is open multimodal coding and research-agent work when the deployment route is available.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current official Moonshot/Hugging Face research, Kimi API documentation, and BenchLM/Artificial Analysis checks. Official model-card, agent-swarm, and independent-harness figures were kept separate; scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Kimi K2.5 technical blog](https://www.kimi.com/en/blog/kimi-k2-5)
  - [Kimi K2.5 model card](https://huggingface.co/moonshotai/Kimi-K2.5)
  - [Kimi API pricing and K2 lifecycle notice](https://platform.kimi.ai/docs/pricing/chat)
  - [BenchLM Kimi K2.5 profile](https://benchlm.ai/models/kimi-k2-5)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
