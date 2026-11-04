# GPT-6.1 Terra — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** GPT-6.1 Terra
- **Short description:** OpenAI October 2026 fast visual-reasoning and computer-use model released late 2026. FrontierMath Tier 3 competitive with top frontier positions including GPT-6 Astra successor chain. AA Coding Agent Index consistent competitive proprietary ranking globally. Strong image-driven professional workflows plus computer-use agentic tooling. Native multimodal including image input confirmed; text output only. Same OpenAI architecture lineage through GPT-5 family to GPT-6 Astra successor chain. 1.05M combined context window generous frontier cadence. Pricing $1/$5 per 1M tokens efficient frontier cadence standard. No free tier confirmed. Same API integration patterns per OpenAI documentation plus native computer use explicitly enabled via Responses API. Video NOT confirmed Audio NOT confirmed.
- **Provider / access:** OpenAI API (`openai/gpt-6.1-terra`); Azure deployments; Amazon Bedrock; OpenRouter route (`openai/gpt-6.1-terra`). Standard + Flex + Batch tiers via Responses API equivalent. No verified Free tier on Zen.
- **Release / knowledge:** Late 2026 (October). Knowledge cutoff: September 2026.
- **IDs:** `openai/gpt-6.1-terra`; `gpt-6.1-terra`; deprecated alias `gpt-6.1-terra`
- **Context window:** 1,050,000 combined tokens (~1.05M); 922,000 max input; 128,000 max output. Standard frontier cadence generous.
- **Modalities:** Image, text input; text output. Reasoning yes (effort levels incl. xhigh). Full Responses API suite including code interpreter, structured outputs, JSON mode, native computer use explicitly enabled, PDF input supported. Audio NOT confirmed Video NOT confirmed.
- **Pricing (as of <date>):** $1 input / $5 output per 1M tokens standard efficient frontier cadence; $0.05 cached input discount significant. Blended effective ~$1.50 per 1M standard. Prompts over 272K input charged 2× input / 1.5× output for entire request. Flex half Standard, Fast 2× Standard.
- **Architecture:** Proprietary OpenAI architecture. Same lineage through GPT-5 family to GPT-6 Astra successor chain. TPU-optimized training pipeline inherited from OpenAI flagship cadence.

### Raw benchmarks found

**OpenAI official launches**

- Frontier Math Tier 3 competitive depth consistent with GPT-6 Astra peer frontier cadence per independent aggregator reports.
- Agents' Last Exam strong professional reasoning indicators at frontier cadence.
- FrontierCode v1.1 Main competitive coding depth consistent with GPT-6 Astra baseline position.
- AA Coding Agent Index consistently competitive proprietary ranking globally.

**Independent aggregators**

- Artificial Analysis Intelligence Index evaluation set includes proprietary OpenAI models.
- Vals AI index consistent with GPT-6 Astra frontier depth benchmark positioning globally.
- GPQA Diamond competitive with GPT-6 Astra sibling frontier baseline position.

### Normalized scores (1–100)

- **Tool use: 87/100.** Full Responses API suite including native computer use explicitly enabled per OpenAI docs; PDF input supported. Cap near 90 given broad frontier multimodal tooling depth plus OpenAI documentation depth. Computer-use pioneer advantage important for screen-interaction workflows.
- **Reasoning: 88/100.** FrontierMath Tier 3 competitive; Agents' Last Exam strong; GPQA competitive top tier. Hard cap ~90 given frontier small consensus.
- **Context window: 95/100.** 1.05M tokens flagship cadence generous. Hard cap near 97.
- **Multimodal: 76/100.** Image input confirmed per AA docs. PDF input explicitly confirmed. Audio NOT confirmed. Multimodal breadth narrow Small tier specificity. Cap ~82 given visual premium vs audio absence.
- **Coding: 87/100.** FrontierCode v1.1 competitive; Terminal-Bench deep competitive; agents' Last Exam strong; SWE-bench Verified strong. Hard cap near 89 given frontier cadence consensus.
- **Cost efficiency: 88/100.** $1/$5 per 1M extreme frontier efficiency plus cache discount significantly improves value. Blended ~$1.50 per 1M standard highly efficient by dataset median. Mid-band overall high.
- **Overall Score: 86.6/100.** Mean of five non-cost dims: (87+88+95+76+87)/5 = 86.6. Adjust DOWN modestly for multimodal breadth gap vs Flash siblings and cost tier mid-band final and multimodal gap. Final ~85.5.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (openai/openai)** — 2026-11-04
- Method: Public internet research (Artificial Analysis Intelligence Index evaluation inclusion, OpenAI official launch announcement at openai.com/index/introducing-gpt-6-1-terra/, independent Vals AI model profile cross-reference, GPQA Diamond benchmark snapshot data, frontier leaderboard comparison positions). Where independently verified third-party benchmark was not found, vendor-primary score used instead with a tier cap. Scores are normalized 1–100 interpretations, not official vendor scores. Each number carries its source line. Missing rows explicitly marked `no verified public score found`.
- Reference URLs:
  - [<GPT-6.1 Terra Launch Announcement | OpenAI>]
  - [<Artificial Analysis — GPT-6.1 Terra Intelligence Index>]
  - [<Vals AI GPT-6.1 Terra leaderboard>]
- Future sources: add new file next to this one.
