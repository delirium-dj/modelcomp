# Gpt Oss 120b — findings by Muse Spark 1.2

- Source: OpenAI/GPT-OSS 120B, e.g. Meta (`muse-spark-1.2-contributor-free`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gpt Oss 120b (gpt-oss-120b)
- **Short description:** OpenAI's August 2025 open-weights MoE flagship (117B total, 5.1B active), Apache 2.0 licensed, runs on single 80GB GPU with near o4-mini reasoning.
- **Provider / access:** Open weights on Hugging Face `openai/gpt-oss-120b` (MXFP4), via 98+ providers (Fireworks, Groq, AWS Bedrock, etc.); API ID `gpt-oss-120b` or `openai/gpt-oss-120b` on OpenRouter; Chat Completions with tool calling, reasoning levels low/medium/high.
- **Release / knowledge:** 2025-08-05 release; knowledge cutoff 2024-06-30 (per LMSpeed/docs)
- **IDs:** `opencode/gpt-oss-120b` (OpenCode Zen paid route); no Free ID seeded but self-host free
- **Context window:** 128,000 tokens (131,072 per some docs) — verified via OpenAI model card (36 layers, 128 experts, 4 active per token)
- **Modalities:** text in; text out; reasoning yes (3 levels); tool calls yes (strong), structured outputs yes; no native image/audio/video (text-only dataset)
- **Pricing (as of 2026-09-25):** $0.15 in / $0.60 out per 1M (Opper/Artificial Analysis reference); cheapest Geodd $0.04/$0.18; Apache 2.0 self-host $0 — no Zen Free ID
- **Architecture:** MoE Transformer 36 layers, 128 experts (4 active/token), 5.1B active / 117B total, alternating dense + locally banded sparse attention, trained 2.1M H100-hours on H100s

### Raw benchmarks found

Agent / tool use:

- Tau-Bench (agentic tool use): **matches/exceeds o4-mini, outperforms o3-mini** (OpenAI release: gpt-oss-120b outperforms o3-mini and matches/exceeds o4-mini on TauBench) — no numeric % disclosed, qualitative
- Terminal-Bench 2.1: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found
- BenchLM ranks #135/221 with 49.25/100; source-verified #66/104

Reasoning / knowledge:

- GPQA Diamond (without tools): **80.1%** (OpenAI via Simon Willison: o3 83.3%, o4-mini 81.4%, gpt-oss-120b 80.1%, o3-mini 77%)
- MMLU-Pro: **81%** (Opper AI independent benchmark)
- Humanity's Last Exam: **20%** (Opper AI)
- AIME 2024 & 2025: **does even better than o4-mini** (OpenAI release) — exceeds o4-mini on competition math (no exact % split in release)
- Artificial Analysis Intelligence Index: **15.6** (Opper), ECI 140.69 #142/346
- HLE w/o tools: included above

Coding:

- Codeforces (competition coding): **matches or exceeds o4-mini** (OpenAI release)
- LiveCodeBench: no verified public numeric found (general claim of parity with o4-mini)
- SWE-bench Verified: no verified public numeric found
- SciCode / Vibe Code Bench: no verified public score found
- BenchmarkList: 189 benchmarks tracked, no single coding breakout cited

Long context:

- No MRCR/RULER retrieval score found — 128K window only, no long-context retrieval measurement reported

### Normalized scores (1–100)

- **Tool use: 72/100.** Strong Tau-Bench parity with o4-mini and advertised 10s chained browsing calls support, capped by missing Terminal-Bench numeric and BenchLM 49.25 rank.
- **Reasoning: 78/100.** GPQA 80.1% and MMLU-Pro 81% near frontier o4-mini/o3, plus AIME >o4-mini; capped by HLE 20% and Intelligence Index 15.6 lower than closed flagships.
- **Context window: 62/100.** 128K (131K) is baseline tier; instruction-runs fits single doc but far below 1M–2M leaders, so mid score.
- **Multimodal: 15/100.** Text-only training (OpenAI: mostly English text-only STEM focus) — no image/audio/video input, text-only out; minimum per template.
- **Coding: 68/100.** Codeforces parity with o4-mini and outperforms o3-mini suggests solid coding, capped by absent public LiveCodeBench/SWE numeric.
- **Cost efficiency: 95/100.** Apache 2.0 open-weights self-host $0 plus $0.15/$0.60 hosted is among cheapest reasoning models; $0.04/$0.18 cheapest route drives near-max score despite no Free ID.
- **Overall Score: 59/100.** Mean of five quality dims (72+78+62+15+68)/5=59.0→59; best fit for cost-efficient self-hosted reasoning with strong tool use on consumer hardware.

---

## Signature

- Provided by: **Muse Spark 1.2 (meta/muse-spark-1.2-contributor-free)** — 2026-09-25
- Method: public internet research (OpenAI gpt-oss release/blog, model card 2508.10925, Opper AI, BenchLM, Simon Willison benchmarks); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
