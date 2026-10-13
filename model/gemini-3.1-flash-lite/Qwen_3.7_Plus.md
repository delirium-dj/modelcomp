# Gemini 3.1 Flash Lite — findings by Qwen 3.7 Plus
- Source: Google/Gemini 3.1 Flash Lite (`google/gemini-3.1-flash-lite`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash Lite
- **Short description:** Google's March 2026 lightweight, ultra-low-latency model engineered for high-frequency lightweight tasks. AA Intelligence Index 16 (above average for class, median 13). 361 t/s output speed (notably fast). 1432 Elo on Arena.ai Leaderboard. SWE-Bench Verified ~78.0%. 62% improvement over Gemini 2.5 Flash on AA Intelligence Index (34 vs 21 in reasoning mode). 1M context window. Multimodal (text, image, audio, PDF in). $0.25/$1.50 per 1M with 90% cache discount. Free tier available. Now deprecated in favor of Gemini 3.5 Flash-Lite.
- **Provider / access:** Google (Gemini API, AI Studio, Vertex AI, OpenCode Zen). Proprietary.
- **Release / knowledge:** March 3, 2026. Knowledge cutoff: January 2025.
- **IDs:** `google/gemini-3.1-flash-lite`
- **Context window:** 1,048,576 tokens (1M)
- **Modalities:** Text, image, audio, PDF in; text out
- **Pricing:** $0.25 in / $1.50 out per 1M; 90% cache discount. Free tier available.

### Raw benchmarks found

Agent / tool use: No specific agentic benchmark scores published. Tool calling supported.

Reasoning / knowledge: AA Intelligence Index 16 (above average for class, median 13). Arena.ai Elo 1432. Outperforms models of similar tier. Reasoning mode scores 34 on AA Intelligence Index (vs Gemini 2.5 Flash 21).

Coding: SWE-Bench Verified ~78.0% (within 2 points of Gemini 3.1 Pro at 80.6%).

Multimodal: Text, image, speech, video input. No standard multimodal benchmarks published.

Long context: 1M native context window.

### Normalized scores (1–100)

- **Tool use: 50/100.** No specific agentic benchmark scores published. Tool calling supported. Scored conservatively due to limited data.
- **Reasoning: 50/100.** AA Intelligence Index 16 is above average for class (median 13). Arena.ai Elo 1432 is solid. 62% improvement over Gemini 2.5 Flash. However, absolute scores are moderate for a frontier-class evaluation.
- **Context window: 75/100.** 1M context is good but not best-in-class (2M models exist).
- **Multimodal: 60/100.** Text, image, speech, video input is comprehensive. No standard multimodal benchmarks published.
- **Coding: 55/100.** SWE-Bench Verified ~78.0% is strong (near Gemini 3.1 Pro 80.6%). Lite model achieving near-Pro coding is notable.
- **Cost efficiency: 85/100.** $0.25/$1.50 per 1M is affordable. 90% cache discount. Free tier available. 361 t/s is exceptionally fast. $0.06 per task on Intelligence Index.
- **Overall Score: 58/100.** Mean of Tool (50) + Reasoning (50) + Context (75) + Multimodal (60) + Coding (55) = 290/5 = 58.0. Strong speed, cost efficiency, and near-Pro coding are highlights, but deprecated status, moderate reasoning scores, and limited benchmark coverage limit the score.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
