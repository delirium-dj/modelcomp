# Gemini 2.5 Flash — findings by Claude Sonnet 4.6

- Source: Google DeepMind / Gemini 2.5 Flash (`gemini-2.5-flash`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google DeepMind's mid-tier multimodal "workhorse" model from the 2.5 generation. Released in 2025, deprecated/retired in 2026 in favour of the Gemini 3.x series. Known for strong GPQA reasoning and SWE-bench coding at Flash-tier cost; supported optional "thinking" budget.
- **Provider / access:** Google AI Studio and Vertex AI (`gemini-2.5-flash`). Chat Completions–style via Gemini API; now retired — no new endpoint provisioning as of 2026-09-17.
- **Release / knowledge:** 2025 (stable GA); deprecated mid-2026. Knowledge cutoff not publicly stated precisely for 2.5 Flash.
- **IDs:** `google/gemini-2.5-flash`. No OpenCode Zen Free ID found; scored on paid pricing.
- **Context window:** 1,000,000 tokens input; max output 65,536 tokens. Verified via roboflow.com and google.dev documentation (now archived).
- **Modalities:** Text, image, video, audio, and PDF in; text out. Reasoning supported (optional thinking budget). Tool calls, JSON mode, code execution. No image/audio generation out.
- **Pricing (as of last-known active state, 2025–mid-2026):** $0.30 / 1M input, $2.50 / 1M output; cached input $0.03 / 1M; Batch API 50% discount available. (Endpoint now retired — pricing archived; verified via rapidevelopers.com and creditforstartups.com.)
- **Architecture:** Proprietary (Google DeepMind); multimodal transformer. Exact parameter count undisclosed. Positioned between Flash-Lite (faster/cheaper) and Pro (most capable) tiers.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **~60.3–60.4%** (rankedagi.com, ai-tldr.dev; multiple sources consistent)
- Terminal-Bench 2.1: **no verified public score found** for Gemini 2.5 Flash specifically
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **~82.8%** (ai-tldr.dev, rankedagi.com; corroborating sources)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- Intelligence Index (Artificial Analysis): **no verified public rank found** for 2.5 Flash specifically
- Context retrieval (MRCR): **no verified public score found**

Coding:

- SWE-bench Verified: **~60.3–60.4%** (same entry as tool-use)
- LiveCodeBench: **no verified public score found**
- DeepSWE: **no verified public score found**
- SciCode: **no verified public score found**

Long context:

- 1M input confirmed but no public MRCR / RULER retrieval score at depth found; optional thinking budget aids long-context coherence (unquantified).

### Normalized scores (1–100)

- **Tool use: 58/100.** SWE-bench Verified ~60% is the primary agentic evidence; no Terminal-Bench, Tau3, or GDPval verified numbers; mid-range tool-use profile, N/A penalties applied for missing benchmarks.
- **Reasoning: 72/100.** GPQA Diamond 82.8% — strong reasoning; frontier ref is 90%+ for 90–100; mid: 60–80% → 55–65 but 82.8% pushes above mid; HLE and LCR absent cap further; scores 72.
- **Context window: 95/100.** 1M token (confirmed); no depth retrieval accuracy study published for 2.5 Flash; same 95 per tier mapping.
- **Multimodal: 82/100.** Text + image + video + audio + PDF in; no non-text out or Live API; per methodology +video/PDF in = 75–90; audio in pushes toward 85; rounded to 82.
- **Coding: 60/100.** SWE-bench Verified 60% sole verified data point; DeepSWE/LiveCodeBench absent; per methodology mid coding 65–75 but SWE at 60 pulls down; scored 60.
- **Cost efficiency: 90/100.** $0.30/$2.50 paid (retired but was pricing basis); per methodology ~$0.30/~$2.50 is highly cost-efficient for a capable model; scores 90 (not 100 because it was never free).
- **Overall Score: 73/100.** Mean of (58 + 72 + 95 + 82 + 60 + 90) / 6 = 457 / 6 = 76.2 → **76**. Best fit: legacy value model — strong multimodal + context at low cost; now retired; migrate to Gemini 3.x for active deployments.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (Anthropic / `claude-sonnet-4-6`)** — 2026-09-17
- Method: public internet research (web search against ai-tldr.dev, rankedagi.com, roboflow.com, rapidevelopers.com, google.dev, creditforstartups.com, retellai.com); scores are normalised 1–100 interpretations, not official vendor scores. Model is deprecated — all findings are archival.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
