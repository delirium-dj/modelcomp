# Mistral Large 4 — findings by Fledge Alpha

- Source: Mistral AI (`mistral-large-4`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4 ("Le Chonk", ML4)
- **Short description:** Mistral's largest model to date — a ~1T-parameter natively multimodal MoE flagship, launched in public preview two days before this writing. State-of-the-art among open weights on cybersecurity, finance, and legal agent tasks; open weights promised end of October 2026.
- **Provider / access:** Mistral Studio / La Plateforme (`mistral-large-4`), OpenRouter, Vercel AI Gateway. Chat Completions-compatible; `reasoning_effort: "high" | "none"`.
- **Release / knowledge:** 2026-10-06 public preview (mistral.ai/news/mistral-large-4).
- **IDs:** `mistralai/mistral-large-4` (no Free ID on Zen found)
- **Context window:** 524,288 tokens served via API (Mistral docs list 1M); max output 262,144 (mistrallarge4.org FAQ, OpenRouter).
- **Modalities:** text + image in (documents, charts, natural images, visual grounding); text out; hybrid instruct-and-reasoning; function calling; JSON mode.
- **Pricing (as of 2026-10-08):** list $1.36 input / $4.18 output per 1M; temporary 50% launch sale $0.68 / $2.09 (Mistral pricing page via mistrallarge4.org). Paid only.
- **Architecture:** ~1.05T total / 49–52B active MoE (official announcement says 52B active; FAQ says 49B), trained from scratch on 3,800 Grace Blackwell GPUs; open weights scheduled end of October 2026 (not yet published).

### Raw benchmarks found

Agent / tool use:

- AutomationBench (657 business workflows): **59.9%** (Mistral launch, ahead of Kimi K3, MiMo-V2.6-Pro, DeepSeek V4 Pro)
- AA-Briefcase (long-horizon knowledge work): **1,393 Elo** (Mistral launch, ahead of DeepSeek V4 Pro)
- Harvey's Legal Agent Benchmark: outperforms all open-source models (Mistral launch; exact value in chart image)
- B3 AI Security Benchmark (Lakera): **93.3%** attack resistance (Mistral launch; no higher competitor score seen)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **38** (CryptoBriefing launch coverage)
- SciCode-Verified: state of the art among open-weight models (Mistral launch; value in chart image)
- GPQA Diamond / HLE: no verified public score found for ML4 preview
- STEM human eval vs GLM-5.3: ML4 preferred in CAD and STEM, on par in finance/coding (Mistral internal)

Coding:

- DeepSWE v1.1: **61.7%** (Mistral launch)
- Terminal-Bench 4.0: **28.3%** (Mistral launch)
- SWE-Atlas-QnA: **59.4%** (Mistral launch)
- Coding Agent Index: **49.8%** (Mistral launch, ahead of DeepSeek V4 Pro 0813 and Qwen3.8 Max)
- Surge AI blind human eval (coding quality, 1–5): **3.74**, 2nd of 5 — behind Claude Opus 5 (4.22), ahead of Kimi K3 (3.59), GLM-5.3 (3.60), GLM-5.2 (3.40)

Cybersecurity:

- AA Cyber Index: top 5 globally, leads non-Chinese open weights by a wide margin (Mistral launch)
- Vulnerability reproduce-and-patch test: **82%**, highest of any model (Mistral launch; Claude Opus 5.5 / GPT-6 Astra score ~0 due to refusals)
- Cybench: **93%** of 40 challenges (Mistral launch, among highest reported for open weights)

Multimodal:

- Dense 200 visual grounding (bbox): **42%**, surpassing GPT-6-Astra (41%) (Mistral launch)
- ChartQA Pro / GDP.pdf: reported in launch charts, exact values in images

Long context:

- 524,288-token API window verified (FAQ/OpenRouter); no MRCR/RULER public number found.

### Normalized scores (1–100)

- **Tool use: 82/100.** AutomationBench 59.9% and AA-Briefcase 1,393 Elo beat Kimi K3 / DeepSeek V4 Pro class models; capped by preview-stage coverage (no Terminal-Bench 2.1 / Tau suite numbers yet).
- **Reasoning: 80/100.** AA Intelligence Index 38 plus SciCode-Verified open-weight SOTA and preferred-over-GLM-5.3 STEM human eval; capped by missing GPQA/HLE numbers two days post-launch.
- **Context window: 78/100.** 512K served window (1M claimed in docs) with 262K max output; capped below 1M-native flagships until the 1M tier is served and retrieval-tested.
- **Multimodal: 74/100.** Text+image input with frontier-class visual grounding (Dense 200 42% > GPT-6-Astra); text-only output, no audio/video input.
- **Coding: 83/100.** DeepSWE 61.7%, Coding Agent Index 49.8% ahead of DeepSeek V4 Pro / Qwen3.8 Max, and 2nd place in blind human coding eval behind only Claude Opus 5; capped by modest Terminal-Bench 4.0 (28.3%).
- **Cost efficiency: 68/100.** List $1.36/$4.18 with a 50% launch promo ($0.68/$2.09) is aggressive for a frontier-class open model, but not free and promo is temporary.
- **Overall Score: 79/100.** Mean of (82, 80, 78, 74, 83) = 79.4 → 79. Best fit: sovereign/self-hosted enterprise deployments needing open weights with top-tier cyber, finance, and legal agentic performance.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-08
- Method: public internet research (Mistral launch post, mistrallarge4.org FAQ/timeline, OpenRouter, CryptoBriefing, tech-insider.org); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
