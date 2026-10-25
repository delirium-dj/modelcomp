# Research Report — Muse Glimmer 30B

**STEM:** Muse_Glimmer_30B  
**Date:** 2026-10-25 UTC  
**Queue source:** model-queue.md, tasks/research-assign.md  
**Models researched:** 5, in queue order.

## Models researched

### 1. muse-spark-1.3 — Overall 93.9
- **File:** `model/muse-spark-1.3/Muse_Glimmer_30B.md`
- **Key findings:**
  - Released 2026-09-02 by Meta, 1.0M context, multimodal input.
  - Artificial Analysis Intelligence Index 61 xhigh / 62 max; Terminal-Bench 85% xhigh /86% max; GPQA Diamond 94%; HLE 47%; CritPt 26% +8 vs 1.2; GDPval-AA 1,709 Elo.
  - Pricing $1.25/$4.25.
  - Normalized overall score: **84/100** for Muse_Glimmer_30B.
- **Sources:** Meta research blog introducing Muse Spark 1.3, LLM Stats, Artificial Analysis article & model page.

### 2. gemini-3.8-flash — Overall 92.5
- **File:** `model/gemini-3.8-flash/Muse_Glimmer_30B.md`
- **Key findings:**
  - Released 2026-09-02 by Google, 1.0M input / 66K output, text/image/audio/video/PDF in.
  - Artificial Analysis Intelligence Index 41 High; output speed 136.9 t/s, very verbose 170M tokens.
  - Pricing $0.75/$3.75, $1.24 per Intelligence Index task.
  - Normalized overall score: **83/100**.
- **Sources:** LLM Stats model page, Artificial Analysis Gemini 3.8 Flash High page, Google blog.

### 3. gpt-6-astra — Overall 91.9
- **File:** `model/gpt-6-astra/Muse_Glimmer_30B.md`
- **Key findings:**
  - Released 2026-09-04 by OpenAI, 1.1M input /128K output, text+image in.
  - Artificial Analysis Intelligence Index 53 Max; 67.8 t/s, 60M output tokens.
  - Pricing $10/$1 cached/$50, $3.26 per Intelligence Index task.
  - Normalized overall score: **79/100**.
- **Sources:** LLM Stats model page, Artificial Analysis GPT-6 Astra Max page, OpenAI launch post.

### 4. claude-opus-5 — Overall 91.8
- **File:** `model/claude-opus-5/Muse_Glimmer_30B.md`
- **Key findings:**
  - Released 2026-07-24 by Anthropic, 1.0M context, text+image in.
  - Artificial Analysis Intelligence Index 51 Max; 52.3 t/s, 140M tokens, very verbose.
  - Pricing $5/$0.5 cached/$25, $5.86 per Intelligence Index task.
  - Normalized overall score: **78/100**.
- **Sources:** LLM Stats model page, Artificial Analysis Claude Opus 5 Max page, Anthropic system card.

### 5. claude-mythos-5.1 — Overall 91.4
- **File:** `model/claude-mythos-5.1/Muse_Glimmer_30B.md`
- **Key findings:**
  - Released 2026-09-01 by Anthropic, trusted-access version of Fable 5.1, 1.0M context, text+image in.
  - Artificial Analysis Intelligence Index 66 Max /65 xhigh; HLE 59.1%; Terminal-Bench v2.1 91.4%; SciCode 62.0%; GDPval-AA 1,853 Elo; AA-Briefcase 1,694 Elo.
  - Pricing $10/$0.25 cached/$50, $3.76 per Intelligence Index task max.
  - Normalized overall score: **81/100**.
- **Sources:** LLM Stats model page, Artificial Analysis Claude Fable 5.1 article, Anthropic launch post.

## Summary of methodology

- ≥3 independent web searches per model, official model cards/docs prioritized + independent benchmark sources.
- Scores normalized 1–100 per Muse_Glimmer_30B interpretation, not vendor scores.
- Files created per contract `model/<slug>/Muse_Glimmer_30B.md`.

## Next steps

- Continue queue with next missing models per model-queue.md order.
- Run `pnpm sync && pnpm build.types && pnpm build` after findings finalized.

---
*Provided by Muse Glimmer 30B — 2026-10-25*
