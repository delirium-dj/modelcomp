### Model card

- **Name:** GLM-5.3-Flash (Z.AI; OpenCode ID `opencode/glm-5.3-flash`, **Zen Free ID available**)
- **Short description:** Z.AI's lightweight Flash-class reasoning MoE (open weights) engineered for ultra-fast agentic coding, high-frequency tool calls and low latency. BenchLM composite 60.62/100, rank #47 of 512 (partial coverage: 37 of 486).
- **Provider / access:** Z.AI Open Platform (`zai/glm-5.3-flash`) plus GLM-family hosts on models.dev; OpenAI-compatible API with tool calling and structured output; also served free through OpenCode Zen.
- **Release / knowledge:** GLM-5.x generation, successor to GLM-4.7-Flash (BenchLM "related earlier model"); exact release date and cutoff not published on the profile.
- **Context window:** 1M per BenchLM; the site card (`meta.json`) records **204K** for the OpenCode tier — treat 204K as the effective ceiling.
- **Modalities:** Text in/out on the chat endpoint (BenchLM "Reasoning"); vision rows exist only via Vals-hosted variants. Tool calling: yes.
- **Pricing (as of 2026-09-29):** **$0 via OpenCode Zen Free** (`glm-5.3-flash-free` family tier); paid GLM-Flash tiers are budget-class (single-digit dollars per 1M blended at most).

### Raw benchmarks found

Agent / tool use (BenchLM, updated 2026-09-28): **GDPval-AA 1773 Elo** (top-decile knowledge work); Toolathlon-Verified **78.4%**; Terminal-Bench 2.1 **84.3%** (Vals 62.9%); AutomationBench **48.8%** (AA 60.4%); AA Tau3-Banking **47.2%**; AA Briefcase **1452**; Agents' Last Exam **26.3%**; AA Terminal-Bench 4.0 **32.8%**; GDP.pdf **15.4%**

Coding: DeepSWE **63.4%**; SWE-bench (Vals) **92.0%**; LiveCodeBench (Vals) **80.5%**; NL2Repo **56.3%**; AA-SciCode **51.6%**

Reasoning / knowledge: HLE with tools **55.3%**; GPQA Diamond (Vals) **86.4%**; MMLU-Pro (Vals) **86.1%**; AA Intelligence Index **41.8**; CritPt **15.4%**; AA-LCR **80.0%**; MLCR-AA **51.1%**; CharXiv **89.4%**; Design Arena Website **1280**

Missing for this exact ID: Omniscience / hallucination pair, SWE-bench Verified (official), Terminal-Bench 4.0 (official), video/audio suites.

### Normalized scores (1–100)

- **Tool use: 84/100.** GDPval-AA Elo 1773 is elite (top ~5% of the tracked field) and Toolathlon-Verified 78.4% + Terminal-Bench 2.1 84.3% show reliable long tool chains; capped by weak frontier-agentic ceilings (Agents' Last Exam 26.3%, AA Terminal-Bench 4.0 32.8%, Tau3-Banking 47.2%).
- **Reasoning: 72/100.** HLE-with-tools 55.3% and GPQA-Diamond 86.4% are solid for a Flash class, AA Intelligence Index 41.8 is mid-pack, but CritPt 15.4% and the absence of any Omniscience/hallucination measurement cap it.
- **Context window: 76/100.** AA-LCR 80.0% is strong long-context reasoning and BenchLM lists a 1M window, but the OpenCode tier ships 204K and there is no MRCR/RULER retrieval-depth number.
- **Multimodal: 55/100.** Text-only on the OpenCode endpoint; the single visual row (CharXiv 89.4%) comes from a hosted variant, and no video/audio/image-input path exists — a hard architectural cap.
- **Coding: 82/100.** SWE-bench (Vals) 92.0%, LiveCodeBench 80.5%, DeepSWE 63.4% and Terminal-Bench 2.1 84.3% make it one of the strongest budget coders available; capped because official SWE-bench Verified/Pro are unpublished and AA-SciCode 51.6% shows weaker scientific-computing depth.
- **Cost efficiency: 99/100.** Free through OpenCode Zen for this exact ID, with open weights for self-hosting — a $0 Zen tier scores 100; one point withheld only because paid third-party hosting varies widely and the 204K OpenCode tier shortens the advertised window.
- **Overall Score: 73.8/100.** (84 + 72 + 76 + 55 + 82) / 5 = 73.8 — best fit as a free, fast agentic-coding and tool-calling workhorse; not a multimodal or unsupervised-factuality choice.

---

## Signature

- Provided by: **Pixel Canary (pixel-canary, early access via Vercel AI Gateway — underlying model not yet announced)** — 2026-09-29
- Method: Public internet research (BenchLM profile `glm-5-3-flash` refreshed 2026-09-28, Z.AI OpenCode listing, models.dev pricing index); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
