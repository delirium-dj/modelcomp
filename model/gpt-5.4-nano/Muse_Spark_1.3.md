# GPT-5.4 Nano — findings by Muse Spark 1.3

- Source: OpenAI/GPT-5.4 nano (`gpt-5.4-nano`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Nano
- **Short description:** OpenAI's most lightweight, cost-efficient 5.4 variant (Mar 2026, API-only): built for speed-critical classification, extraction, ranking, and sub-agent execution; keeps SWE-Pro above the GPT-5 mini line at ~1/4 the mini price.
- **Provider / access:** OpenAI API only (`gpt-5.4-nano`; effort none/low/medium/high/xhigh). No Codex/ChatGPT listing — API-only. OpenCode Zen `opencode/gpt-5.4-nano`.
- **Release / knowledge:** Released 2026-03-17 (OpenAI "Introducing GPT-5.4 mini and nano" post). Knowledge cutoff Aug 31, 2025 (OpenAI API docs + OpenRouter quickstart).
- **IDs:** `gpt-5.4-nano` (OpenAI API); `opencode/gpt-5.4-nano` (Zen catalogue / meta.json)
- **Context window:** 400,000 total (max output undisclosed for nano; family 128K line applies to mini) — verified via OpenAI API docs and sandbase/openrouter rows (400K)
- **Modalities:** Text and image in; text out (OpenAI docs "Text Input and output / Image Input only"; sandbase + OpenRouter "supports text and image inputs"); tool calls yes
- **Pricing (as of 2026-10-01):** $0.20 per 1M input / $1.25 per 1M output (OpenAI launch post; the-decoder notes 4.0x/3.125x vs GPT-5 nano). No $0 tier — scored on paid pricing.
- **Architecture:** Proprietary lightweight reasoning model (undisclosed parameters)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **46.3%** xhigh (OpenAI launch post table; vs 75.1% full, 60.0% mini, 38.2% GPT-5 mini)
- Toolathon: **35.5%** xhigh (OpenAI launch post table; vs 54.6% full, 42.9% mini, 26.9% GPT-5 mini)
- OSWorld-Verified: **39.0%** xhigh (OpenAI launch post table; below GPT-5 mini 42.0% — weak computer-use for the family)
- GDPval-AA: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **82.8%** xhigh (OpenAI launch post table; vs 93.0% full, 88.0% mini, 81.6% GPT-5 mini)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-Bench Pro (public): **52.4%** xhigh (OpenAI launch post table; vs 57.7% full, 54.4% mini, 45.7% GPT-5 mini — above the prior-mini line)
- SWE-bench Verified: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- OpenAI MRCR v2 8-needle: **44.2%** 64-128K / **33.1%** 128-256K xhigh (OpenAI launch post table; vs 86.0%/79.3% full)
- Graphwalks: **73.4%** BFS / **50.8%** parents 0-128K xhigh (OpenAI launch post table; vs 93.1%/89.8% full)

### Normalized scores (1–100)

- **Tool use: 55/100.** Terminal-Bench 2.0 46.3% scrapes the mid-band floor with Toolathon 35.5%; OSWorld-Verified 39.0% trails even GPT-5 mini and missing GDPval/Tau/Claw/MCP caps hard.
- **Reasoning: 76/100.** GPQA 82.8% holds the mid-band top; capped by missing HLE/LCR/CritPt/Index/Omniscience — single-benchmark breadth only.
- **Context window: 70/100.** 400K ceiling in the 200K-500K tier middle; capped by weak measured retention (MRCR 44.2% collapsing to 33.1% past 128K).
- **Multimodal: 62/100.** Text + image in fits the +image-in 60-70 band lower-middle; no MMMU/CharXiv number for this exact ID, no video/audio in or non-text out.
- **Coding: 74/100.** SWE-Pro 52.4% beats the prior-mini line (45.7%) at nano cost; capped by missing Verified/LiveCode/SciCode/Vibe/DeepSWE.
- **Cost efficiency: 95/100.** $0.20/$1.25 per 1M interpolates between the ~$0.10/$0.20 97-99 band and the ~$0.60/$2.20 ~92 tier; cheapest 5.4 tier, API-only high-volume pick.
- **Overall Score: 67/100.** Mean of the five quality dims (55+76+70+62+74)/5 = 67.4; best fit as classify/extract/rank/sub-agent nano; escalate to mini for computer use.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-10-01
- Method: public internet research (OpenAI "Introducing GPT-5.4 mini and nano" post 2026-03-17 with full xhigh tables, GPT-5.4 nano API docs page, the-decoder.com analysis, sandbase.ai API reference, OpenRouter quickstart); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
