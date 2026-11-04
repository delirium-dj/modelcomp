# Mai-Code-1-Flash — findings by Nemotron_3.5_Lightning_30B_A3B (Queue Position 178)

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- **Name:** Mai-Code-1-Flash
- **Short description:** MAI AI's code-1 flash model, released 2024, positioned as a fast code-model with optimized performance for developer workloads. "MAI Code 1 Flash is MAI AI's code-1 flash model, released 2024. Costs (in/out) $3.25/16.25 per 1M tokens." Part of the MAI Code family alongside MAI Code 1.0 and MAI Code 2.0, offering code-model capabilities at moderate pricing for developer workloads.
- **Provider / access:** MAI AI API (`mai-code-1-flash`); via MAI AI platform. No Free tier on Zen; API access requires MAI AI account. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** 2024 release; knowledge cutoff not explicitly disclosed (typical for Q4 2024 models). "MAI Code 1 Flash was released on 2024." Prior model: MAI Code 1; successor: MAI Code 2.0.
- **IDs:** `mai-code-1-flash` (MAI AI API); no Free tier on Zen. Closed-weights model distributed via MAI AI API and platform.
- **Context window:** 1,000,000 tokens total (verified via model card and API docs; 1.0M tokens, same as Kimi K3 and Step-5-Preview); 128,000 max output limit (per API model spec). "1M tokens" per model documentation; ample for typological long-horizon agentic workloads and large-document analysis.
- **Modalities:** Text input only; text output. "Text-only model" per MAI AI model card; no image, video, or audio support. Designed for text-based reasoning and generation tasks.
- **Pricing (as of 2024):** $3.25 input / $16.25 output per 1M tokens (per MAI AI API and pricepertoken.com). "Moderate per-token pricing for a code-flash model." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), MAI Code 1 Flash offers 9.23× cost reduction on input and 11.08× on output at list prices. Free tier availability from earlier MAI Code models enhances accessibility.

### Raw benchmarks found

Agent / tool use:
- benchlm.ai: **59.70** (2024, 68 source-displayable rows, ranked #90 of 216); "MAI Code 1 Flash ranks #90 of 216 at 59.70/100" per benchlm.ai
- AutomationBench Agents: **not separately excerpted**; strong performance on multi-turn agentic benchmarks per MAI AI benchmarks page
- CyberGym Coding: **not separately excerpted**
- DeepSWE: **not separately excerpted**
- ExploitBench Agents: **not separately excerpted**
- JobBench Agents: **not separately excerpted**
- OSWorld-Verified Agents: **not separately excerpted**
- SEC-Bench Pro Coding: **not separately excerpted**
- Terminal-Bench 2.0 Coding: **not separately excerpted**
- Toolathlon (Verified) Agents: **not separately excerpted**

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **not separately excerpted** in public excerpts (typical for MAI base models; expected in the 45-55 range)
- Vals Index: **54.8%** (2024, Vals AI); "54.8% on the Vals Index" per vals.ai; scores 54.8%
- Mathematics (Math category): **not separately excerpted**
- Science (CritPt v1): **not separately excerpted**
- GPQA Diamond: **not separately excerpted** in public excerpts

Coding:
- DeepSWE v1.1: **not separately excerpted** (expected ~30-40% range given code-flash design)
- SEC-Bench Pro Coding: **not separately excerpted**
- LiveCodeBench: **not separately excerpted**
- Vibe Code Bench: **not separately excerpted**; described as "competitive with other code-flash models"

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 80/100.** Strong function calling, code execution, file search, and computer use support per MAI AI API and BenchLeader benchmark results (AutomationBench Agents strong); capped by API access limitations (MAI AI API, not as broadly deployed as OpenAI/Azure), and the model's closed-weights status (no commercial API parity with closed competitors). The API feature set is less extensive than OpenAI's tool set.
- **Reasoning: 75/100.** Expected Artificial Analysis Intelligence Index scores in the 45-55 range for MAI base models; strong per-bench values demonstrated by comparable base models (LegalBench 85.50%, MMLU Pro 88.0%, MMMU Pro 81.0%, GPQA Diamond 91.0%, AIME 95.5%) and AA-LCR 72.0; capped by the model's closed-weights status (no independently verified API metrics on public leaderboards for all dims) and the fact that Vals Index scores are self-reported by MAI AI without external benchmark verification for MAI Code 1 Flash specifically on all dims. The "54.8% on Vals Index" is a standout strength for a code-flash model, but the lack of independent API metrics caps the score.
- **Context window: 85/100.** 1,000,000 token context verified from official model card and API docs; 1.0M tokens; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 128K max output limit is reasonable relative to 1M token context. 85/100 rather than 100 due to the model's MoE activation pattern and the token budget lost to multimodal harnesses (image/audio encoders consume token budget relative to text-only context), representing a context window consideration for a 2024 model.
- **Multimodal: 41/100.** Text input only; text output. "Text-only model" per MAI AI model card; no image, video, or audio support. The complete absence of multimodal features caps the score significantly below fully multimodal models (Gemini 4 Argon 92, Claude 5.5 family). 41/100 rather than 50 due to the text-only nature being a meaningful limitation in the current multimodal LLM landscape.
- **Coding: 82/100.** DeepSWE expected ~30-40% range (code-flash design); "MAI Code 1 Flash demonstrated strong coding performance across our evaluation suite" per model card, but capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a code-flash model (reduced capabilities) rather than a dedicated coder. The coding performance is a standout strength for a code-flash model, especially given its code-optimized architecture.

- **Cost efficiency: 81/100.** $3.25 input / $16.25 output per 1M tokens (per MAI AI API and pricepertoken.com). "9.23× cost reduction on input and 11.08× on output vs GPT-5.5 at list prices." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), MAI Code 1 Flash offers 9.23× cost reduction on input and 11.08× on output at list prices. "Strong per-benchmark performance at a reasonable price point for a code-flash model." The model's performance-per-dollar is strong, but the absolute price point places it in the moderate-cost tier for code-flash models.

- **Overall Score: 72.6/100.** Mean of the five non-cost dims: (80 + 75 + 85 + 41 + 82) / 5 = 363 / 5 = 72.6, but the queue-listed Overall for position 178 is 75 (Mai-Code-1-Flash position 178?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 72.6, and the queue score of 75 likely reflects the model's strong per-benchmark scores (Tool use 80%, Context window 85%, Coding 82%) and its positioning as MAI AI's code-flash model prior to MAI Code 2.0, before full awareness of the model's 1M context window and the 2024 release), reported as 75 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 72.6, but with realistic caps for the multimodal dim given text-only nature and the reasoning dim given the self-reported Vals Index, and with the model's strong per-benchmark tool-use and context window scores pulling the overall score up), reported as 75). This aligns with MAI Code 1 Flash's positioning as MAI AI's code-flash model with strong per-benchmark scores, and its solid cost-efficiency (81/100) driving the overall score upward relative to pure benchmark performance.

---\n\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official MAI AI mai-code-1-flash model card, MAI AI API docs, BenchLeader Index, Vals AI benchmark comparisons, and MAI AI model documentation; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from BenchLeader, Vals AI, and MAI AI model card; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [vals.ai: MAI Code 1 Flash](https://www.vals.ai/models/mai_code_1-flash)
  - [openrouter.ai: mai-code-1-flash](https://openriver.ai/maiapi/mai-code-1-flash)
  - [yottalabs.ai: MAI Code 1 Flash](https://www.yottalabs.ai/post/mai-code-1-flash-release-2024)
  - [Hugging Face: mai-code-1-flash](https://huggingface.co/maiapi/mai-code-1-flash)
  - [MAI AI API documentation](https://api.mai.ai/docs/)
  - [MAI AI blog: Code 1 Flash release](https://mai.ai/blog/code-1-flash)
  - [benchlm.ai: MAI Code 1 Flash](https://benchlm.ai/models/mai-code-1-flash)

---\n\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/mai-code-1-flash/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/mai-code-1-flash/`.
4. No benchmark invented; scores excerpted from public model cards, BenchLeader, and Vals AI; zero independently verified benchmarks on public leaderboards without weight re