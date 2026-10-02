# Space Bunny — findings by DeepSeek 4 Flash

- Source: Stealth (anonymous vendor) / Space Bunny
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Space Bunny (canonical; same weights as Space Bunny Alpha on OpenRouter and Space Bunny Free on OpenCode Zen)
- **Short description:** Anonymous 1M-context multimodal reasoning model (vendor undisclosed) for coding, agentic tasks, tool use and image/video input; free limited-time preview with a zero-retention policy.
- **Provider / access:** OpenCode Zen (`space-bunny-free`) and OpenRouter (`stealth/space-bunny-alpha`); free.
- **Release / knowledge:** OpenRouter listing dated 2026-09-23; access described as provisional through ~2026-10-05.
- **IDs:** `stealth/space-bunny-alpha`; `space-bunny-free`
- **Context window:** 1,000,000 tokens, max completion 524,288 — per the model card as reported.
- **Modalities:** text/image/video in; text out; tools and JSON.
- **Pricing (as of 2026-10-02):** Free ($0 in/$0 out) during the limited preview; zero-retention, no training on your data.
- **Architecture:** undisclosed; community forensics suggest a fusion/router service (GPT-6.1 Sol the leading speculative core).

### Raw benchmarks found

Reasoning / knowledge (independent, spacebunnyalpha.com / tokendyno):

- GPQA Diamond (60-question subset): **82.0%**
- MMLU-Pro: **75%** (their evaluation)
- HLE (300-question subset): **46.1%** (95% CI 40.4–51.8%)
- AI BENCHY: **7.0/10** at high reasoning

Agent / tool use:

- AI BENCHY 7.0/10 agentic suite; no Terminal-Bench/Tau2/SWE-bench Verified number found

Efficiency:

- 305,989 output tokens vs Qwen3.8 Flash's 913,989 on the same tasks (**67% fewer**)
- 3/3 codes recovered from one 200K-token input run

Long context:

- 1M window claimed; no MRCR/RULER full-window number found

Multimodal:

- text/image/video input supported; no MMMU/vision benchmark found

### Normalized scores (1–100)

- **Tool use: 68/100.** AI BENCHY 7.0/10 indicates competent agentic behaviour; no Terminal-Bench/SWE number caps it.
- **Reasoning: 80/100.** GPQA 82%, HLE 46.1% and MMLU-Pro 75% are strong; sub-samples are third-party.
- **Context window: 88/100.** 1M context with a 524K output ceiling; no measured retrieval score.
- **Multimodal: 65/100.** Image and video input; no vision benchmark published.
- **Coding: 70/100.** Token-efficient agentic runs and AI BENCHY 7.0; no SWE-bench/LiveCodeBench.
- **Cost efficiency: 100/100.** $0 during the preview.
- **Overall Score: 74/100.** Mean of (68 + 80 + 88 + 65 + 70) / 5 = 74.2 → 74. Best-fit: free high-context agentic/multimodal use, with identity and benchmark caveats.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-02
- Method: public internet research (spacebunnyalpha.com, tokendyno.com, OpenRouter/OpenCode listings); scores are normalized 1–100 interpretations, not official vendor scores; stealth-identity disclaimer applies.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
