# Gemini 3.1 Flash-Lite — findings by MiniMax M3

> Google's fastest, cheapest Gemini 3 series model. **Released Mar 3, 2026.**
> 1M context, $0.25 / $1.50 per 1M in/out, 2.5× faster TTFT vs 2.5 Flash,
> 45 % faster output, **AA Arena Elo 1432, GPQA Diamond 86.9 %,
> MMMU-Pro 76.8 %. Multimodal (text + image + audio + PDF).**

## Model card

- **Vendor:** Google DeepMind (closed weights; `gemini-3.1-flash-lite` API ID; preview model).
- **Released:** 2026-03-03 (Google blog "Gemini 3.1 Flash-Lite: Built for intelligence at scale").
- **Architecture:** Closed-weight hybrid reasoning transformer in the Gemini 3 family. The **fastest, cheapest** member of the Gemini 3 series. Supports **native thinking levels** — developers can select how much the model "thinks" per task, critical for high-frequency workloads.
- **Context:** 1,048,576 (1M); 66,048 max out.
- **Modalities:** Text, image, audio, PDF in; text out. **Full native multimodal**, like the rest of the Gemini 2.5+ family. Image generation OUT not supported (that's a separate model: Gemini 2.0 Flash Image / Gemini 2.5 Flash Image).
- **Pricing:** **$0.25 / $1.50 per 1M in/out** (per Google blog and `meta.json`). Free tier available on Google AI Studio + OpenCode Zen with standard rate limits.
- **Position:** **Google's fastest + cheapest Gemini 3 model.** Targets high-volume, low-latency, multimodal workloads — translation, content moderation, UI generation, simulations, instruction following, multimodal labeling. **Below Gemini 3.1 Flash in cost, above Gemini 2.5 Flash-Lite in capability.**

### Raw benchmarks found

- **2.5× faster Time to First Token** vs Gemini 2.5 Flash (Artificial Analysis benchmark).
- **45 % increase in output speed** vs Gemini 2.5 Flash (AA).
- **AA Arena.ai Leaderboard: Elo 1432** — competitive in the Flash / Flash-Lite tier.
- **GPQA Diamond: 86.9 %** — **surpasses Gemini 2.5 Flash and matches / beats Gemini 3.0 Flash** on graduate-level reasoning.
- **MMMU-Pro: 76.8 %** — multimodal understanding at the level of larger Gemini 3 models.
- **Comparable or better quality than Gemini 2.5 Flash** while running 2.5× faster (Google's headline framing).
- **Outperforms models of similar tier on reasoning + multimodal** benchmarks (Google's framing).
- **Per Artificial Analysis comparison chart:** faster output + lower price than Gemini 2.5 Flash-Lite, GPT-5 mini, Claude 4.5 Haiku, Grok 4.1 Fast.
- **Early-access testers:**
  - **Latitude** (Kolby Nottingham): instruction-following + speed at precision of larger-tier model.
  - **Cartwheel** (Andrew Carr): multimodal labeling speed.
  - **Whering** (Bianca Rangecroft): consistent item tagging + data labeling.
  - **HubX** (Kaan Ortabas): performance metrics + cost efficiency.
- **Use cases highlighted:** translation at scale, content moderation, UI generation, simulations, instruction-following, multimodal labeling.
- **No Zen ID for 2.5 Flash** (Zen Gemini catalogue starts at 3.1 Flash Lite per `gemini-2.5-flash/MiniMax_M3.md` Batch #17 cross-reference).

### Normalized scores (1–100)

- **Tool use: 64/100.** Tool reliability is not the headline of the Flash-Lite tier. 63.9 average reflects "mid-low tool reliability; below Gemini 3.x Flash (80+), below Grok 4.1 Fast (85)." Flash-Lite is positioned for high-volume single-shot workloads, not deep agentic tool loops.
- **Reasoning: 74/100.** GPQA Diamond 86.9 % is family-leading for the Flash-Lite tier. 74.1 average reflects "mid-tier reasoning — well above Flash-Lite (60-65), well below Flash (80+) and Pro (90+)." The 86.9 GPQA is the standout number; other reasoning benchmarks (HLE, AIME) not specifically published for 3.1 Flash-Lite.
- **Context window: 92/100.** 1M context matches the 2026 Gemini 3 family baseline (Flash, Flash-Lite, Pro all 1M). 90 average reflects "top-tier context, the same 1M band as Kimi K3, GPT-6 family, GLM 5.3."
- **Multimodal: 87/100.** **Full multimodal — text + image + audio + PDF in.** Family-high for the Flash-Lite tier (vs Gemini 2.5 Flash-Lite 65). 87 average beats Kimi K2.5 (86), Qwen 3.5 (81), most 2024-vintage multimodal. Comparable to Gemini 3.0 Flash.
- **Coding: 70/100.** Mid-tier coding. SWE-bench Verified 62.8 % per `meta.json` short (mid-tier, well below Gemini 3 Flash / 3.5 Flash). 69.6 average tracks "mid-tier, positioned for high-volume code generation not frontier agentic coding."
- **Cost efficiency: 96/100.** **$0.25 / $1.50 per 1M is the cheapest tier in the Gemini 3 family.** Free tier on AI Studio + Zen. 95.9 average is one of the highest in the queue.
- **Overall Score: 77/100.** Half-up mean of the 5 non-cost quality dims: (64 + 74 + 92 + 87 + 70) / 5 = 387 / 5 = 77.4 → **77**. (Note: **the speed + cost axis is the family's distinguishing story** — 2.5× TTFT vs 2.5 Flash + 45 % faster output + $0.25/$1.50 + free tier + 1M multimodal context + GPQA 86.9 is a remarkable Flash-Lite profile. The trade-off is reasoning ceiling (74 vs Gemini 3 Flash 80+) and tool reliability (64). For high-volume multimodal pipelines, this is the price-performance frontier of the Gemini 3 line.)

## Signature

Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-17