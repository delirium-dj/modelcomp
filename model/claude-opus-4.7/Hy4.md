- Source: Anthropic/Claude Opus 4.7
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's 2026-04-16 software-engineering-focused Opus upgrade, with better high-resolution vision, self-verification, file-system memory and a "Routines" feature (timer / API / GitHub triggers). A distinct model; Opus 4.8 is its successor and Mythos remains a higher capability tier.
- **Provider / access:** Claude products and the official API, Amazon Bedrock, Google Cloud Vertex AI and Microsoft Foundry. Claude API (Chat Completions-style Messages API).
- **Release / knowledge:** 2026-04-16; knowledge cutoff updated from the previous generation (exact date not published).
- **IDs:** `claude-opus-4-7` family ID as cited. No free Zen ID verified.
- **Context window:** no verified Opus 4.7-specific token figure in the retrieved pages — no verified public score found; improved file-system memory reduces dependence on in-context information across long, multi-session work.
- **Modalities:** text and image in, text out; **high-resolution image recognition up to 2,576 px on the long edge (~3.75 MP), more than 3x the previous model**; generates interfaces, slides and documents for professional tasks; extended/adaptive thinking depth with self-designed verification mechanisms; native tool use and scheduled "Routines". No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** **$5 / 1M input, $25 / 1M output** — unchanged from Opus 4.6. A **new tokenizer** maps the same input to ~**1.0–1.35x** more tokens, and hard tasks produce more thinking/output tokens, so effective cost can rise despite the flat rate card.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. Anthropic applied "differentiated weakening" of cyber offence/defence capability during training and added safeguards that automatically detect and block prohibited or high-risk cyber requests. New features: auto mode, `/fewer-permission-prompts`, review, focus mode, adaptive thinking depth, difficulty control and task budgets.

### Raw benchmarks found

Agent / tool use:

- Financial-analysis agent test: **highest score** (no exact number published in the retrieved page)
- GDPval-AA / OfficeQA Pro: cited as leading at launch; the Baike Gemini 3.1 Pro article gives Opus 4.7 **1753 Elo** on GDPval-AA and **80.6%** on OfficeQA Pro (comparison rows measured under the Gemini 3.1 Pro comparison, labelled by harness)
- "Routines": timer / API / GitHub triggered "cloud employee" workflows (qualitative)
- Terminal-Bench / Tau3-Banking / Tau2-Bench / OSWorld / AutomationBench / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found for this exact ID

Reasoning / knowledge:

- Designed to self-design verification mechanisms before outputting, with improved instruction following and reduced human supervision on hard coding tasks (qualitative)
- GPQA Diamond / HLE / ARC-AGI / LCR / CritPt / Artificial Analysis index: no verified public score found for this exact ID

Coding:

- SWE-bench Pro: **64.3%** — above GPT-5.4's **57.7%**
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- Optimised memory usage with file-system-backed notes across long, multi-session work; no MRCR / RULER / GraphWalks figure found — no verified public score found

Safety (context, not scored): overall safety similar to Opus 4.6 — better honesty and malicious-attack resistance, slightly worse on providing harm-reduction advice; still below Mythos-class capability, deliberately weakened on cyber tasks.

### Normalized scores (1–100)

- **Tool use: 87/100.** Top financial-agent result, leading GDPval-AA (1753) and OfficeQA Pro (80.6%) at launch, plus unique scheduled/API/GitHub Routines; capped by no scored Terminal-Bench/τ-bench/OSWorld figure for this exact ID.
- **Reasoning: 88/100.** Strong self-verification, adaptive thinking depth and complex-instruction handling with an updated knowledge cutoff; capped by no published numeric reasoning benchmark for this ID.
- **Context window: 87/100.** File-system memory that reduces context dependence across long multi-session work; capped by no verified token window and no long-context retrieval measurement.
- **Multimodal: 85/100.** A >3x jump in image resolution (2,576 px / ~3.75 MP) plus interface/slide/document generation; capped by text-only output, no verified audio/video input, and no published multimodal benchmark score.
- **Coding: 88/100.** SWE-bench Pro 64.3% (above GPT-5.4's 57.7%) with less supervision needed on hard tasks; capped by no SWE-bench Verified / Terminal-Bench figure and by later Opus 4.8 reaching 69.2%.
- **Cost efficiency: 68/100.** $5/$25 per 1M held flat, but the new tokenizer's 1.0–1.35x token inflation and heavier thinking raise effective cost; excluded from Overall.
- **Overall Score: 87/100.** Half-up mean of 87, 88, 87, 85, 88 = 87.0 → 87. Best fit: long, less-supervised software-engineering and professional document/slide work with high-resolution visual inputs.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Claude Opus 4.7 article (release, pricing, SWE-bench Pro 64.3%, vision resolution, tokenizer, safety, features), cross-checked against the Baidu Baike Gemini 3.1 Pro article for the GDPval-AA 1753 / OfficeQA Pro 80.6% comparison rows — those are labelled by harness and comparand, never merged as directly published Opus 4.7 vendor scores. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Claude Opus 4.7 — 百度百科 (release, pricing, SWE-bench Pro, vision, tokenizer, features)](https://baike.baidu.com/item/Claude%20Opus%204.7/67623873)
  - [Gemini 3.1 Pro — 百度百科 (GDPval-AA / OfficeQA Pro comparison rows)](https://baike.baidu.com/item/Gemini%203.1%20Pro/67406132)
