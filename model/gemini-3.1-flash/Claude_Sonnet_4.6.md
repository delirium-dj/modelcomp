# Gemini 3.1 Flash — findings by Claude Sonnet 4.6

- Source: Google DeepMind / Gemini 3.1 Flash (`gemini-3.1-flash`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash
- **Short description:** Note: as of 2026-09-17, public documentation confirms "Gemini 3.1 Flash-Lite" (released ~May 7, 2026) as the primary Flash-tier product for the 3.1 generation; a standalone "3.1 Flash" (non-Lite) appears in the folder slug but full independent branding is uncertain — it may correspond to the 3.1 Flash class at a middle tier between Flash-Lite and 3.1 Pro. This report covers findings attainable for the Gemini 3.1 Flash tier based on available public information; annotated where the Pro benchmark proxy is used.
- **Provider / access:** Google AI Studio and Vertex AI (`gemini-3.1-flash` or equivalent API ID); Chat Completions–style Gemini API.
- **Release / knowledge:** March–May 2026 timeframe (3.1 family release window); knowledge cutoff not publicly disclosed.
- **IDs:** `google/gemini-3.1-flash`. No OpenCode Zen Free ID found as of 2026-09-17; scored on paid pricing.
- **Context window:** 1,048,576 tokens input (~1M); max output 65,536 tokens (consistent across 3.1 Flash family per google.dev).
- **Modalities:** Text, image, video, audio, PDF input; text output. Supports function calling, structured outputs, code execution, search grounding. Configurable "thinking levels."
- **Pricing (as of 2026-09-17):** Pricing for 3.1 Flash tier not independently confirmed; 3.1 Flash-Lite is $0.25/$1.50; Flash standard tier estimated between Flash-Lite and Pro. Scored provisionally.
- **Architecture:** Proprietary Google DeepMind multimodal transformer; exact parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified (3.1 Pro proxy as upper bound): **~80.6%** (deepmind.google technical report; noted as 3.1 Pro — Flash expected lower)
- SWE-bench Verified (3.1 Flash inferred): **~70–78%** (range cited in blog.google comparison noting Flash ≈ 78% on SWE-bench in "earlier 3.x iterations" — provisional)
- Terminal-Bench 2.0 (3.1 Pro proxy): **~68.5%** (deepmind.google report; Flash-Lite GPQA proxy suggests Flash sits between Pro and Lite)
- Tau3-Banking: **no verified public score found** for 3.1 Flash specifically
- GDPval-AA: **no verified public score found**
- Claw-Eval: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond (3.1 Pro proxy): **~94.3%** (deepmind.google, aireleasetracker.com; Flash-Lite measured 86.9% → Flash standard interpolated ~89–91%)
- GPQA Diamond (3.1 Flash inferred): **~88–91%** — provisional interpolation between Pro (94.3%) and Flash-Lite (86.9%)
- HLE (3.1 Pro): **no verified public score found**
- LCR / MLCR: **no verified public score found**
- Arena.ai Elo: Flash-Lite ~1432 per medium.com; Flash standard expected higher

Coding:

- SWE-bench Verified: **~70–78%** provisional (same range as tool-use entry)
- DeepSWE: **no verified public score found** for 3.1 Flash
- LiveCodeBench: **no verified public score found**
- SciCode: **no verified public score found**

Long context:

- 1M context confirmed (structural); no MRCR / RULER public retrieval-at-depth score found for 3.1 Flash.

### Normalized scores (1–100)

- **Tool use: 65/100.** Provisional range 70–78% SWE-bench for Flash tier; no TB2.1, Tau3, or GDPval confirmed; N/A penalties applied; mid-range agentic profile.
- **Reasoning: 80/100.** Interpolated GPQA ~88–91% between verified Pro (94.3%) and Flash-Lite (86.9%); strong reasoning tier; capped from 85+ by lack of HLE/LCR independent confirmation.
- **Context window: 95/100.** 1M confirmed; no depth-retrieval study published → 95.
- **Multimodal: 82/100.** Text + image + video + audio + PDF in; no generation out; consistent with 2.5 Flash multimodal profile at 82.
- **Coding: 65/100.** ~70–78% SWE-bench provisional; no DeepSWE/LiveCodeBench; mid-upper coding range.
- **Cost efficiency: 93/100.** Flash standard estimated between Flash-Lite ($0.25/$1.50) and Pro (higher); estimated ~$0.40–$0.75/$2.50–$4.00 range; highly cost-efficient for capability level; scores 93 provisional.
- **Overall Score: 77/100.** Mean of (65 + 80 + 95 + 82 + 65 + 93) / 6 = 480 / 6 = 80.0 → **80**. Best fit: strong multimodal + reasoning Flash-tier model; most benchmarks are provisional interpolations — treat as indicative pending official 3.1 Flash standalone benchmarks.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (Anthropic / `claude-sonnet-4-6`)** — 2026-09-17
- Method: public internet research (web search against deepmind.google, blog.google, aireleasetracker.com, google.dev, emergent.sh, designforonline.com, medium.com, teamai.com, progressiverobot.com); scores are normalised 1–100 interpretations, not official vendor scores. Several benchmarks are provisional interpolations — see notes above.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
