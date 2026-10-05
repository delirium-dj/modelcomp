# Inkling — findings by GPT 5.5

- Source: Thinking Machines Lab/Inkling
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Inkling is Thinking Machines Lab's most capable open model, with native reasoning over text, images, and audio and adjustable thinking effort.
- **Provider / access:** Thinking Machines Lab / Tinker and hosted routes; open model access.
- **Release / knowledge:** Released July 2026.
- **IDs:** `opencode/Inkling`
- **Context window:** Repo route tracks 128K; vendor pages describe up to 1M context for Inkling-family models.
- **Modalities:** Repo route tracks text in/out, while vendor page says native reasoning over text, images, and audio.
- **Pricing (as of 2026-10-05):** Thinking Machines launch material cites Inkling output price around $4.05/M; provider-route input pricing varies.
- **Architecture:** Open model from Thinking Machines Lab.

### Raw benchmarks found

Agent / tool use:

- Thinking Machines Inkling page: describes Inkling as its most capable open model with native reasoning over text, images, and audio and adjustable thinking time (`https://thinkingmachines.ai/inkling/`).
- Inkling-Small launch post compares Inkling and Inkling-Small across Terminal-Bench 2.1, HLE, and IFBench effort/cost curves (`https://thinkingmachines.ai/news/inkling-small/`).
- Terminal-Bench 2.1: **evaluated by vendor, exact accessible value not found**
- IFBench: **evaluated by vendor, exact accessible value not found**

Reasoning / knowledge:

- Artificial Analysis discussion reports Inkling results and a performance/cost curve, but exact rows were not visible in accessible text.
- HLE: **evaluated by vendor, exact accessible value not found**
- GPQA Diamond: **no verified public score found**

Coding:

- Terminal-Bench 2.1 vendor evaluation indicates coding/terminal-agent coverage, but exact score was not exposed.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**

Long context:

- Vendor family material indicates up to 1M context, while repo route tracks 128K; no MRCR/RULER row found.

### Normalized scores (1–100)

- **Tool use: 82/100.** Vendor Terminal-Bench/IFBench coverage supports tool ability, capped by missing exact public rows.
- **Reasoning: 84/100.** Most-capable open Inkling model with adjustable thinking, capped by limited exact public rows.
- **Context window: 76/100.** Repo route is 128K, despite family 1M support.
- **Multimodal: 80/100.** Vendor reports text/image/audio reasoning, but repo route metadata is text-only.
- **Coding: 82/100.** Likely strong open coding/terminal model, but exact SWE/LCB rows absent.
- **Cost efficiency: 82/100.** Open model with moderate output price; self-hosting may improve value.
- **Overall Score: 81/100.** Mean of the five quality dimensions; best fit is open-model reasoning with flexible effort.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
