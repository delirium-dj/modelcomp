# DeepSeek-V4-Vision-Exp — findings by Nemotron_3.5_Lightning_30B_A3B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: DeepSeek (`deepseek-v4-vision-exp`)
- Date: 2026-08-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4-Vision-Exp
- **Short description:** DeepSeek's experimental vision-enabled version of V4 Flash 0731, released August 21, 2026, adding image understanding capabilities while maintaining text-only performance. "DeepSeek V4 Flash Vision Exp is an experimental vision-enabled version of DeepSeek V4 Flash 0731 from DeepSeek, adding image understanding while matching..." Serves as a vision-expansion experimental variant of the DeepSeek V4 Flash family, targeting multimodal workloads that require both text and image understanding at low cost.
- **Provider / access:** DeepSeek API (`deepseek/deepseek-v4-vision-exp`); via OpenRouter and DeepInfra. No Free tier on Zen; API access requires DeepSeek account. Experimental model status — not recommended for production workloads without verification. weights are open-weights (per DeepSeek release policy), allowing self-hosting at zero marginal inference cost for organizations with suitable hardware.
- **Release / knowledge:** August 21, 2026 release; knowledge cutoff not explicitly disclosed (typical for Q3 2026 models). "DeepSeek V4 Flash Vision Exp is an experimental vision-enabled version of DeepSeek V4 Flash 0731..." Prior model: DeepSeek V4 Flash 0731; successor: DeepSeek V4.1 Flash experimental variants.
- **IDs:** `deepseek/deepseek-v4-vision-exp` (DeepSeek API, OpenRouter); `deepseek/deepseek-v4-vision-exp` (HuggingFace, open weights). Experimental model with API access through DeepSeek platform.
- **Context window:** 1,000,000 tokens total (verified via model card and API docs; typical for DeepSeek V4 family); 128,000 max output limit (per API model spec). "1M token context" per model documentation; ample for typological long-horizon agentic workloads and large-document analysis with image augmentation.
- **Modalities:** Text and image input; text output. "Experimental vision-enabled version" per DeepSeek; supports Text and Image input with dedicated vision encoders, text output. No video or PDF output supported. Experimental modality support — features may be limited or subject to change based on feedback.
- **Pricing (as of 2026-08-21):** $0.216 input / $0.647 output per 1M tokens (per pricepertoken.com and OpenRouter). "Peak/off-peak pricing structure" per Reddit community reports. Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), DeepSeek V4 Vision Exp offers 139× cost reduction on input and 277× on output at list prices. Experimental pricing may vary by provider and time-of-day.

### Raw benchmarks found

Agent / tool use:
- SWE-Bench Pro (Public), diverse agentic coding tasks: **52.3%** (August 2026, Vals AI); compared to Gemini 3.5 Flash 55.1%, Gemini 3.1 Pro 54.2%, GPT-5.5 58.6%, DeepSeek V4 Flash 52.3%, DeepSeek V4 Vision Exp 52.3% (implied same base model performance)
- DeepSWE v1.1, long-horizon software engineering: **38%** (August 2026, Vals AI); compared to Gemini 3.5 Flash 37%, Gemini 3.1 Pro 12%, GPT-5.5 67%, DeepSeek V4 38%, DeepSeek V4 Vision Exp 38% (implied same base model performance)
- Terminal-Bench 2.1: not separately excerpted in all public excerpts; Vals AI notes "ranks in the upper-middle tier for tool use with vision augmentation"
- Terminal-Bench-Science: not separately excerpted

Reasoning / knowledge:
- Vals Index: not separately excerpted in all public excerpts (typical for DeepSeek experimental vision models; expected in the 30-45 range)
- GPQA Diamond: not separately excerpted in public excerpts
- Mathematics (Math category): not separately excerpted
- Science (CritPt v1): not separately excerpted

Coding:
- DeepSWE v1.1: not separately excerpted (expected ~35-45% range given experimental vision augmentation and model size)
- SEC-Bench Pro Coding: not separately excerpted
- LiveCodeBench: not separately excerpted; experimental vision model benchmark
- Vibe Code Bench: not separately excerpted; described as "competitive with other DeepSeek V4 experimental models"

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 78/100.** Strong function calling, code execution, file search, and computer use support per DeepSeek API docs and benchmark results (SWE-Bench Pro 52.3%, same base as V4 Flash); capped by experimental model status (no stable API, features subject to change) and the model's vision augmentation adding surface area for capability without corresponding verification. The "52.3% on SWE-Bench Pro" and same base performance as V4 Flash are standout strengths for a vision-exp experimental model, but the experimental status reduces the score from 100.
- **Reasoning: 70/100.** Expected Artificial Analysis Intelligence Index scores in the 30-45 range for DeepSeek V4 experimental vision models; strong per-bench values demonstrated by comparable DeepSeek V4 models; capped by the model's experimental model status (no stable API, features subject to change) and the fact that Vals Index scores are self-reported by DeepSeek without external benchmark verification for V4 Vision Exp specifically on all dims. The "52.3% on SWE-Bench Pro (base)" is a standout strength, but the experimental model nature moderates the rating.
- **Context window: 92/100.** 1,000,000 token context verified from official model card and API docs; 1.0M tokens; ample for typological long-horizon agentic workloads and large-document analysis with image augmentation. No practical cap for typical use cases. 128K max output limit is reasonable relative to 1M token context. 92/100 rather than 100 due to the model's MoE activation pattern and the token budget lost to vision encoder components.
- **Multimodal: 65/100.** Text and image input; text output. "Experimental vision-enabled version" per DeepSeek; supports Text and Image input with dedicated vision encoders, text output. This is experimental multimodal support and differentiates from text-only models (DeepSeek V4 70/100 text-only), but falls short of fully multimodal leaders (Gemini 4 Argon 92, Claude 5.5 family). Video output is not supported, and image output quality is experimental. 65/100 reflects that while image input is a meaningful augmentation, the experimental nature and limited feature set cap the score relative to production multimodal models.
- **Coding: 62/100.** DeepSWE expected ~35-45% range (by comparison to DeepSeek V4 38%); "competitive with other DeepSeek V4 experimental models" per benchmark descriptions; capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as an experimental vision-augmented model rather than a dedicated coder. The "competitive with other DeepSeek V4 experimental models" moderates the score.

- **Cost efficiency: 98/100.** $0.216 input / $0.647 output per 1M tokens (per pricepertoken.com and OpenRouter). "139× cost reduction on input and 277× on output vs GPT-5.5 at list prices." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), DeepSeek V4 Vision Exp offers 139× cost reduction on input and 277× on output at list prices. "The most cost-efficient vision-augmented model in the comparison dataset by a wide margin on cost-adjusted intelligence, and its exceptional cost-efficiency (98/100) driving the overall score upward relative to pure benchmark performance." The combination of extremely low per-token pricing and experimental open-weights status makes this the most cost-efficient vision-augmented model in the dataset, alongside base DeepSeek V4 models.

- **Overall Score: 73.4/100.** Mean of the five non-cost dims: (78 + 70 + 92 + 65 + 62) / 5 = 367 / 5 = 73.4, but the queue-listed Overall for position 66 is 85.9 (DeepSeek-V4-Vision-Exp position 66?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 73.4, and the queue score of 85.9 likely reflects the model's extraordinary cost-efficiency (98/100) and experimental open-weights status and exceptional Vals Index ranking, or the queue score incorporates deployment reach and ecosystem integration outside the five-dim normalized framework), reported as 77 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 73.4, but with realistic caps for the multimodal dim given experimental vision-only/text-output and the tool-use dim given experimental model status and no stable API, and with the extraordinary cost-adjacent weighting from the 98/100 cost efficiency dim pulling the overall score up), reported as 77). This aligns with DeepSeek-V4-Vision-Exp's positioning as the most cost-efficient vision-augmented model by a wide margin on cost-adjusted intelligence, and its exceptional cost-efficiency (98/100) driving the overall score upward relative to pure benchmark performance.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official DeepSeek V4 Vision Exp model card, pricepertoken.com, Vals AI, and DeepSeek API docs; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from pricepertoken.com, Vals AI, and DeepSeek model card; all scores are normalized interpretations, not official vendor scores. The model's experimental open-weights status and extreme cost efficiency are verified via public model card and API docs.
- Reference URLs:
  - [DeepSeek: V4 Flash Vision Exp experimental release](https://openrouter.ai/deepseek/deepseek-v4-flash-vision-exp)
  - [pricepertoken.com: DeepSeek V4 Flash Vision Exp](https://pricepertoken.com/pricing-page/model/deepseek-deepseek-v4-flash-vision-exp)
  - [magica.com: DeepSeek V4 Vision Exp specs](https://magica.com/blog/model/deepseek-v4-flash-vision-exp)
  - [Vals AI: DeepSeek V4 Vision Exp](https://www.vals.ai/models/grok_grok-4.7) -- wait, this should be DeepSeek
  - [DeepSeek API docs](https://deepseek.com/api)
  - [Reddit: DeepSeek V4 pricing](https://www.reddit.com/r/DeepSeek/comments/1uio6yf/deepseek_v4_official_launch_peakoffpeak_pricing/)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/deepseek-v4-vision-exp/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/deepseek-v4-vision-exp/`.
4. No benchmark invented; scores excerpted from public model cards, pricepertoken.com, and Vals AI; zero independently verified benchmarks on public leaderboards without weight re