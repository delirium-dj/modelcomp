# Ling 3.0 Flash Sante — findings by GLM 5.3 Flash

- Source: inclusionAI (`ling-3.0-flash-sante`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Sante
- **Short description:** A health/medicine domain fine-tune of Ling 3.0 Flash from inclusionAI (Ant Group's AGI lab), named after the French "santé" (health). Tuned for medical knowledge, diagnostic reasoning, drug safety, and evidence-based retrieval; a sibling of `ling-3.0-flash` (base), `ling-3.0-flash-vl` (vision), and `ling-3.0-flash-fin` (finance — which lives under `models_finance/`, not here).
- **Provider / access:** OpenRouter `inclusionai/ling-3.0-flash-sante` (Chat Completions API, OpenAI-compatible; hosted by Novita). Also listed on OpenCode Zen as `opencode/ling-3.0-flash-sante`. Not on Hugging Face (no open-weights release; proprietary listing).
- **Release / knowledge:** released 2026-09-04; knowledge cutoff not published.
- **IDs:** `opencode/ling-3.0-flash-sante` (Zen, no Free ID — the $0 promo ended 2026-10-04 per Zen meta); `inclusionai/ling-3.0-flash-sante` (OpenRouter, served by Novita).
- **Context window:** 262,144 tokens total / 32,768 max output (verified via OpenRouter listing, corroborated by SurfMind and LM Market Cap; lmmarketcap reports 262.1K / 32.8K).
- **Modalities:** text in / text out; reasoning (switchable thinking mode); function/tool calling; JSON mode; no vision, no audio (LM Market Cap modality table: input text, output text).
- **Pricing (as of 2026-10-09):** paid — $0.04/M input, $0.12/M output (SurfMind, LM Market Cap); Benchmark Heaven's collected Novita-via-OpenRouter price is $0.042 in / $0.123 out (collected 2026-10-09). A free tier existed on OpenRouter/Vercel/Novita as of September 2026 (cldnavi.com) but the $0 promo ended 2026-10-04 on Zen; scored on paid pricing.
- **Architecture:** 124B total / 5.1B active mixture-of-experts (health-tuned variant of Ling 3.0 Flash's hybrid-reasoning MoE: KDA + MLA stacked 5:1, 512 routing experts, 8 active per token per the base model card). Weights are proprietary for Sante (base Ling 3.0 Flash is MIT open-weights; Sante is HF-unlisted).

### Raw benchmarks found

Agent / tool use:

- MCP-Atlas: no verified public score found for Sante — closest proxy: base Ling 3.0 Flash MCP-Atlas 65.5 (cldnavi.com Ling-3.0-flash guide, provisional family-attached number, not model-specific)
- Terminal-Bench 2.1: no verified public score found for Sante — closest proxy: base Ling 3.0 Flash TB2.1 57.0 (cldnavi.com, provisional)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- DiagnosisArena-MCQ: **83.8** (cldnavi.com Ling-3.0-flash guide, 2026-09-04 release context; beats GPT-5.6 Sol 81.9 / Kimi K3 78.4 per the same table)
- MedXpertQA-Text: **53.9** (cldnavi.com; trails GPT-5.6 Sol 60.2, edges Kimi K3 53.5)
- AFUMED-Drug: **89.6** (cldnavi.com, drug safety assessment)
- MedEthicAlign: **82.1** (cldnavi.com, medical ethics alignment)
- GPQA Diamond: no verified public score found for Sante — closest proxy: base Ling 3.0 Flash AIME 2026 93.2 (cldnavi.com, provisional)
- HLE: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found (not listed on AA's 697-model page as of 2026-10-09)
- LM Market Cap composite: **40/100**, Coding rank #282/448 (lmmarketcap.com, proprietary weighted signal score — cited as a third-party quality indicator, not a raw benchmark)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found for Sante — closest proxy: base Ling 3.0 Flash SWE-Bench Pro 56.6 / Multilingual 72.4 (cldnavi.com, provisional)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- Qualitative: "health & medicine tuned lightweight-MoE, still strong on code" (Command Code); "excels in the Coding category" (LM Market Cap, no raw values)

Long context:

- no long-context retrieval reported (MRCR/RULER/GraphWalks values absent; 262K window is spec-verified but unmeasured)

### Normalized scores (1–100)

- **Tool use: 55/100.** No Sante-specific tool benchmark; proxy from the base model (TB2.1 57.0, MCP-Atlas 65.5) sits mid-tier (TB2.1 45–60% → 50–70 band), and medical domain tuning plus OpenRouter tool-calling capability support but do not raise the estimate. Capped by zero measured model-specific numbers.
- **Reasoning: 62/100.** Verified Sante medical benchmarks are mixed-but-solid: DiagnosisArena-MCQ 83.8 (above GPT-5.6 Sol's 81.9) and AFUMED-Drug 89.6, but MedXpertQA-Text 53.9 trails Sol's 60.2; no GPQA/HLE/Index coverage. Capped by the narrow (medical-only) benchmark surface and missing general-reasoning scores.
- **Context window: 70/100.** 262,144 tokens (32.8K max output) verified via OpenRouter — the 200K–500K tier maps to 65–84 with 262K near the low end (~70); max output <64K is a caveat, and no measured retrieval backs a higher mark.
- **Multimodal: 15/100.** Text-only in/out (LM Market Cap modality table; no vision or audio) — text-only scores 10–20.
- **Coding: 58/100.** No Sante-specific coding benchmark; third-party composite 40/100 (lmmarketcap) plus qualitative "still strong on code" and base-model proxies (SWE-Pro 56.6) place it mid-tier below the base model's coding record. Capped by zero measured model-specific coding numbers.
- **Cost efficiency: 99/100.** $0.04/$0.12 per 1M tokens (paid, after the 2026-10-04 promo end) is below the ~$0.10/$0.20 = 97–99 band; Novita's $0.042/$0.123 corroborates. Not 100 because the evaluated tier is paid.
- **Overall Score: 52/100.** Mean of the five quality dims (55 + 62 + 70 + 15 + 58) / 5 = 52.0 — a cheap, long-context medical specialist; use it for health-domain reasoning, not as a general coding/agent workhorse (base Ling 3.0 Flash remains the general pick).

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (DuckDuckGo search; cldnavi.com, LM Market Cap, Benchmark Heaven, SurfMind, OpenRouter, Artificial Analysis, Hugging Face cross-checked); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_5.md`, using the same headings.
