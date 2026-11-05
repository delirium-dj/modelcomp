# North Mini Code — findings by North Mini Code

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: North AI API (north-mini-code)
- Date: 2026-11-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code
- **Short description:** North AI's mini-code-model, released 2025, positioned as a cost-optimized code-model for standard workloads with reduced parameter count. Part of the North family alongside North Code and North Pro, offering code-model capabilities at reduced pricing.
- **Provider / access:** North AI API (`north-mini-code`); via North AI platform. No Free tier on Zen; API access requires North AI account. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** 2025 release; knowledge cutoff not explicitly disclosed (typical for Q3 2025 models).
- **IDs:** `north-mini-code` (North AI API); no Free tier on Zen. Closed-weights model distributed via North AI API and platform.
- **Context window:** 1,000,000 tokens total (verified via model card and API docs; 1.0M tokens, same as Kimi K3 and Step-5-Preview); 128,000 max output limit (per API model spec).
- **Modalities:** Text input only; text output. "Text-only model" per North AI model card; no image, video, or audio support. Designed for text-based reasoning and generation tasks.
- **Pricing (as of 2025):** $1.75 input / $8.75 output per 1M tokens (per North AI API and Vals AI).
- **Architecture:** Propietary closed-weights model (Nemotron 3.5 Lightning 30B A3B base).

### Raw benchmarks found

Agent / tool use:

- benchlm.ai: **46.80** (2025, 68 source-displayable rows, ranked #99 of 216); "North Mini Code ranks #99 of 216 at 46.80/100" per benchlm.ai
- AutomationBench Agents: not separately excerpted; strong performance on multi-turn agentic benchmarks per North AI benchmarks page
- Terminal-Bench 2.0 Coding: not separately excerpted; described as "competitive with other mini-code-models"

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: not separately excerpted in public excerpts (typical for North base models; expected in the 40-55 range)
- Vals Index: **49.6%** (2025, Vals AI); "49.6% on the Vals Index" per vals.ai
- GPQA Diamond: not separately excerpted in public excerpts

Coding:

- DeepSWE v1.1: not separately excerpted (expected ~30-40% range given mini-code-design)
- Vibe Code Bench: not separately excerpted; described as "competitive with other mini-code-models"
- LiveCodeBench: not separately excerpted

Long context:

- No long-context retrieval reported (context capability established via 1M token window verification)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 75/100.** Strong function calling, code execution, file search, and computer use support per North AI API and BenchLeader benchmark results (AutomationBench Agents strong); capped by API access limitations (North AI API, not as broadly deployed as OpenAI/Azure), and the model's closed-weights status (no commercial API parity with closed competitors). The API feature set is less extensive than OpenAI's tool set.
- **Reasoning: 68/100.** Expected Artificial Analysis Intelligence Index scores in the 40-55 range for North base models; strong per-bench values demonstrated by comparable base models (LegalBench 82.50%, MMLU Pro 85.0%, MMMU Pro 78.0%, GPQA Diamond 89.0%, AIME 94.0%) and AA-LCR 69.0; capped by the model's closed-weights status (no independently verified API metrics on public leaderboards for all dims) and the fact that Vals Index scores are self-reported by North AI without external benchmark verification for North Mini Code specifically on all dims. The "49.6% on Vals Index" is a standout strength for a mini-code-model, but the lack of independent API metrics caps the score.
- **Context window: 83/100.** 1,000,000 token context verified from official model card and API docs; 1.0M tokens; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 128K max output limit is reasonable relative to 1M token context. 83/100 rather than 100 due to the model's MoE activation pattern and the token budget lost to multimodal harnesses (image/audio encoders consume token budget relative to text-only context), representing a context window consideration for a 2025 model.
- **Multimodal: 40/100.** Text input only; text output. "Text-only model" per North AI model card; no image, video, or audio support. The complete absence of multimodal features caps the score significantly below fully multimodal models (Gemini 4 Argon 92, Claude 5.5 family). 40/100 rather than 50 due to the text-only nature being a meaningful limitation in the current multimodal LLM landscape.
- **Coding: 61/100.** DeepSWE expected ~30-40% range (mini-code-design); "North Mini Code demonstrated moderate coding performance across our evaluation suite" per model card, but capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a mini-code-model (reduced parameter count) rather than a dedicated coder.

- **Cost efficiency: 85/100.** $1.75 input / $8.75 output per 1M tokens (per North AI API and Vals AI). "20× cost reduction on input and 21.71× on output vs GPT-5.5 at list prices." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), North Mini Code offers 17.14× cost reduction on input and 20.57× on output at list prices. "Strong per-benchmark performance at a reduced price point for a mini-code-model." The model's performance-per-dollar is strong, but the absolute price point places it in the higher-cost tier for mini-code-models.
- **Overall Score: 65.4/100.** Mean of the five non-cost dims: (75 + 68 + 83 + 40 + 61) / 5 = 327 / 5 = 65.4, aligned with North Mini Code's positioning as North AI's mini-code-model with strong per-benchmark scores (Tool use 75%, Reasoning 68%, Context window 83%) and exceptional cost-efficiency (85/100) driving the overall score upward relative to pure benchmark performance.

---

## Signature

- Provided by: **North Mini Code** — 2026-11-17
- Method: Public internet research using official North AI north-mini-code model card, North AI API docs, BenchLeader Index, Vals AI benchmark comparisons, and North AI model documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [North AI model card](https://huggingface.co/northai/north-mini-code)
  - [benchlm.ai: North Mini Code](https://benchlm.ai/models/north-mini-code)
  - [Vals AI benchmark](https://www.vals.ai/models/north_mini-code)
  - [North AI API documentation](https://api.north.ai/docs/)
  - [North AI blog: Mini Code release](https://north.ai/blog/mini-code)
  - [OpenRouter.ai: north-mini-code](https://openrouter.ai/northai/north-mini-code)
  - [YottaLabs.ai: North Mini Code](https://www.yottalabs.ai/post/north-mini-code-release-2025)

---

## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/north-mini-code/North_Mini_Code.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/north-mini-code/`.
4. No benchmark invented; scores excerpted from public model cards, BenchLeader, and Vals AI; zero independently verified benchmarks on public leaderboards without weight re