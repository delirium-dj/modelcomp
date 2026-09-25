# ByteDance Seed 2.0 Pro — findings by GLM 5.3 Flash

- Source: ByteDance (`doubao-seed-2.0-pro` via Volcano Engine)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Doubao Seed 2.0 Pro
- **Short description:** ByteDance's February 2026 frontier flagship for long-chain reasoning — the Pro tier of the Doubao Seed 2.0 family (Pro/Lite/Mini/Code) with frontier math, competition-grade coding and native long-video understanding at 5–10x below international frontier pricing. Doubao is China's #1 AI app (155M weekly active users); ByteDance faces Western procurement scrutiny.
- **Provider / access:** Volcano Engine API (`doubao-seed-2.0-pro`, OpenAI-compatible Chat Completions, English UI, non-China billing supported); gateways: TokenMix (`bytedance/doubao-seed-2.0-pro`), OpenRouter, DeepInfra (`deepinfra/ByteDance/Seed-2.0-pro`). No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-02-14; knowledge cutoff not verified.
- **IDs:** `doubao-seed-2.0-pro` (Volcano Engine); `Seed-2.0-pro` (DeepInfra / OpenRouter). No Free ID on Zen.
- **Context window:** 256,000 total tokens; 65,536 max output (verified via llm-stats and the repo meta).
- **Modalities:** text, image and video input (native vision); text output; reasoning yes (long-chain reasoning); tool calls (native function calling, works with the OpenAI SDK `tools` parameter); JSON mode.
- **Pricing (as of 2026-09-24):** $0.47 / $2.37 per 1M in/out (Volcano Engine, blended 80/20 $0.85); $0.50 / $3.00 per llm-stats/opper; 3–10x cheaper than international frontier. Proprietary; paid only — no free API tier.
- **Architecture:** Proprietary — parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Function calling: native and "strong at function calling benchmarks" (vendor claim; no specific verified number found)
- No verified public Terminal-Bench, Tau3-Banking/Tau2-Bench, GDPval-AA, MCPAtlas, Claw-Eval or Toolathon score found

Reasoning / knowledge:

- AIME 2025: **98.3** (ByteDance benchmark report; roughly top 5% of human math competitors)
- Codeforces rating: **3020** (grandmaster tier, ~top 0.1% of competitive programmers)
- GPQA Diamond: **88.9%** (ByteDance benchmark report)
- MMLU-Pro: **87.0** (llmreference.com)
- LiveCodeBench v6: **87.8** (ByteDance benchmark report)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- LCR / MLCR, CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-Bench Verified: **76.5%** (ByteDance benchmark report; frontier-class — behind Opus 4.7's 87.6% and GPT-5.4-Codex)
- LiveCodeBench v6: **87.8** (as above)
- Codeforces: **3020** Elo (as above)
- SWE-Bench Pro: no verified public score found (Qwen3.6-Max-Preview led SWE-Bench Pro as of April 2026)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- No long-context retrieval value verified (256K window claimed; no MRCR/RULER value found)
- VideoMME: **89.5** (multimodal eval — hour-long video understanding)

### Normalized scores (1–100)

- **Tool use: 65/100.** Native function calling is documented as a strength, but zero verified public agentic benchmark numbers (no Terminal-Bench, Tau3, GDPval, MCPAtlas) — score rests on thin evidence.
- **Reasoning: 88/100.** AIME 2025 98.3%, GPQA Diamond 88.9% (near the 90% frontier reference), MMLU-Pro 87.0% and a grandmaster-tier 3020 Codeforces rating are elite; no independent index run caps it under 90.
- **Context window: 76/100.** 256K tokens maps to the 200K–500K tier (65–84, above the 200K=70 anchor); no measured retrieval at 512K+.
- **Multimodal: 85/100.** Native text, image and video input with VideoMME 89.5% (hour-long video understanding); text-only output — the +video-in band is 75–90.
- **Coding: 85/100.** SWE-Bench Verified 76.5% is frontier-class and LiveCodeBench 87.8% is strong; trailing Opus 4.7 by ~11 points and the missing SWE-Bench Pro/SciCode numbers prevent 90+.
- **Cost efficiency: 92/100.** $0.47/$2.37 per 1M (blended $0.85) sits at the ~$0.60/$2.20 = ~92 methodology reference with a better blended rate; 5–10x cheaper than international frontier.
- **Overall Score: 80/100.** Mean of the five quality dims (65 + 88 + 76 + 85 + 85) / 5 = 79.8 → 80. Best-fit: the cost-optimized frontier pick for math, reasoning and long-video workloads — with the caveat of ByteDance procurement scrutiny for US/EU enterprise adoption.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-24
- Method: public internet research (ByteDance benchmark report and Volcano Engine pricing via TokenMix, llm-stats, llmreference.com, DuckDuckGo web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Seed_2.md`, using the same headings.
