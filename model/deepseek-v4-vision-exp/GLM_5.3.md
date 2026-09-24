# DeepSeek V4 Vision Exp — findings by GLM 5.3

- Source: DeepSeek (`opencode/deepseek-v4-vision-exp`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash Vision Exp
- **Short description:** DeepSeek's experimental native multimodal vision-language MoE for multi-modal code understanding, UI layout reasoning and image-to-code generation. **Retired upstream**: DeepSeek's API docs state the legacy `deepseek-v4-flash-vision-exp` name now routes to DeepSeek-V4.1-Flash; Zen still lists it as its own SKU.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/chat/completions` (openai-compatible); DeepSeek API legacy alias (retired → DeepSeek-V4.1-Flash).
- **Release / knowledge:** V4-generation experimental build, mid-2026; knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/deepseek-v4-vision-exp` (Zen; meta notes a free Zen experimentation tier — not in the current Zen free list, priced $0.14/$0.28 there)
- **Context window:** 200K tokens total (curated platform metadata; the V4.1-Flash successor serves 1M).
- **Modalities:** text/image/PDF in; text out; reasoning yes; tool calls; JSON mode. Images are billed as input tokens by dimension (Zen/DeepSeek docs).
- **Pricing (as of 2026-09-24):** Zen $0.14 in / $0.28 out per 1M (cached read $0.028); DeepSeek API: retired alias billed at Flash price (V4.1-Flash: $0.15/$0.60 off-peak, $0.30/$1.20 peak).
- **Architecture:** experimental native multimodal VL MoE (platform metadata); parameter count not published.

### Raw benchmarks found

> No BenchLM/AA/HF leaderboard page exists for this exact experimental ID. Scores use **DeepSeek-V4.1-Flash** — the documented successor that now serves this ID's traffic — as the closest verified proxy (provisional).

Agent / tool use (V4.1-Flash proxy):

- Terminal-Bench 2.1: **90.6%** (BenchLM `deepseek-v4-1-flash`; Vals 74.5%; TB 4.0 31.2%)
- GDPval-AA: **1600 Elo** (BenchLM; normalized 55.0%)
- Claw-Eval / Tau3: **no verified public score found**
- CyberGym **88.1%**; HLE w/ tools **63.9%**; AA AutomationBench **68.9%** (BenchLM)

Reasoning / knowledge (V4.1-Flash proxy):

- GPQA Diamond: **90.9%** (BenchLM)
- HLE: **36.8%** / AA-HLE **39.2%** (BenchLM); AA-LCR **84.0%**; AA Index **39.5**
- Omniscience Hallucination Rate: **96.5%** (BenchLM — extremely high)

Coding (V4.1-Flash proxy):

- DeepSWE: **74.2%** (BenchLM — at the frontier ref); Codeforces **3471**; NL2Repo **65.4%**; SciCode **51.9%** (BenchLM)
- SWE-bench Verified / LiveCodeBench: **no verified public score found** for this ID

Long context:

- 200K window (platform metadata); no retrieval number published.

Multimodal (V4.1-Flash proxy):

- AA-MMMU-Pro **77.0%**; BabyVision w/ Python **89.6%**; Chartography (tools) **78.9%**; ZeroBench w/ Python **49.0%** (BenchLM).

### Normalized scores (1–100)

- **Tool use: 83/100.** Proxy TB2.1 90.6% is elite and GDPval 1600 strong; discounted for proxy uncertainty and the experimental SKU's retirement.
- **Reasoning: 76/100.** Proxy GPQA 90.9% clears the frontier bar; HLE 37–39% just misses and the 96.5% hallucination rate is a severe knowledge-reliability weakness.
- **Context window: 70/100.** 200K total — the methodology's 200K reference point (successor serves 1M, but this SKU caps at 200K).
- **Multimodal: 72/100.** Text+image+PDF input with image-to-code focus; proxy vision scores are mid (MMMU-Pro 77.0%) with strong chart reasoning (Chartography 78.9%).
- **Coding: 78/100.** Image-to-code specialty plus proxy DeepSWE 74.2% and Codeforces 3471 are strong; SciCode 51.9% is weak and SWE-bench Verified unpublished.
- **Cost efficiency: 97/100.** $0.14/$0.28 per 1M on Zen with $0.028 cached reads — the cheapest tracked SKU this cycle.
- **Overall Score: 75.8/100.** (83 + 76 + 70 + 72 + 78) / 5 = 75.8. Best-fit: ultra-cheap vision/code experimentation; for production use DeepSeek-V4.1-Flash (same traffic, 1M context) instead.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (OpenCode Zen docs, DeepSeek API docs, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
