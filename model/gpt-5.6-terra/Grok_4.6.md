# GPT-5.6 Terra — findings by Grok 4.6

- Source: OpenAI (`openai/gpt-5.6-terra`; OpenCode Zen `opencode/gpt-5.6-terra` expected)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI’s balanced GPT-5.6 tier (mini-class vs Sol flagship / Luna cheap). Everyday coding and agent work at lower price than Sol; not a Zen Free ID.
- **Provider / access:** OpenAI API `gpt-5.6-terra` on Chat Completions and Responses. `reasoning.effort`: none, low, medium (default), high, xhigh, max.
- **Release / knowledge:** GPT-5.6 family GA **2026-07-09**; Terra price cut 20% **2026-07-30**. Knowledge cutoff **2026-02-16** (API model page).
- **IDs:** `openai/gpt-5.6-terra`. Free API tier “Not supported”. ChatGPT Work/Codex: Free/Go users can access Terra (product quota, not $0 API).
- **Context window:** 1,050,000 / 128,000 max output. Prompts >272K input: 2× input and 1.5× output for the full request.
- **Modalities:** Text in/out; **image input only**; audio/video not native. Function calling, computer use, MCP, image generation as a Responses tool.
- **Pricing (as of 2026-09-19):** API **$2.00 / $0.20 cached / $12.00 out** per 1M (post-July-30 cut; launch post originally $2.50/$15). Cache writes 1.25× uncached input. Paid.
- **Architecture:** Proprietary closed weights (GPT-5.6 Terra tier).

### Raw benchmarks found

> OpenAI GPT-5.6 launch tables + DeepMind 3.7 Flash comparison column.

Agent / tool use:

- Terminal-Bench 2.1: **87.4%** (OpenAI launch; DeepMind 3.7 card same).
- Terminal-Bench 4.0: **21.5% ± 3.3%** Codex max (Traictory, verified public board). DeepMind 3.7 card lists Terra TB3.0 **20.8%**.
- Tau3-Banking: **no verified public score found**.
- GDPval-AA v2: **1593 Elo** (OpenAI); DeepMind 3.7 card **1578**.
- OSWorld 2.0: **50.2%** (OpenAI).
- Toolathlon: **53.1%**; AutomationBench **15.2%** (OpenAI).
- Claw-Eval / ClawProBench: **no verified public score found**.
- BrowseComp: **87.5%** (OpenAI).

Reasoning / knowledge:

- GPQA Diamond: **92.9%** (OpenAI).
- HLE: **no verified public score found** on the GPT-5.6 family tables fetched (Sol/Terra HLE rows not in the professional/academic excerpts).
- LCR / MLCR: GraphWalks BFS **76.9%** at 256k / **71.2%** at 1M f1 (OpenAI).
- CritPt: **no verified public score found**.
- Artificial Analysis Intelligence Index v4.1: **55** (OpenAI); DeepMind 3.7 card **57**.
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**.

Coding:

- SWE-bench Verified: **no verified public score found**. SWE-Bench Pro **63.4%** (OpenAI).
- LiveCodeBench: **no verified public score found**.
- SciCode: **no verified public score found**.
- Vibe Code Bench: **no verified public score found**.
- DeepSWE v1.1: **69.6%** (OpenAI / DeepMind 3.7 card).
- AA Coding Agent Index v1.1: **77.4** (OpenAI).

Long context:

- OpenAI MRCR v2 8-needle: **89.6%** at 256K–512K; **72.5%** at 512K–1M (OpenAI). GDM-MRCR v2 128k avg **93.5%** (DeepMind 3.7 card). Window 1.05M.

### Normalized scores (1–100)

- **Tool use: 88/100.** TB2.1 87.4% is on the ~88%+ ref. Caps: GDPval ~1593 vs ~1750+, OSWorld 50.2%, Toolathlon 53.1%, missing Tau3/Claw-Eval.
- **Reasoning: 90/100.** GPQA 92.9% meets 90%+; Index 55–57 is just under 60+. Caps: no public HLE/CritPt/Omniscience rows in the fetched tables.
- **Context window: 95/100.** 1.05M is the ≥1M tier; MRCR 512K–1M **72.5%** is far from ≥98%.
- **Multimodal: 65/100.** Official image-in / text-out; audio/video unsupported → 60–70 band.
- **Coding: 86/100.** DeepSWE 69.6% below 74%+; Coding Agent Index 77.4 and TB 87.4% support the mid-80s. Caps: SWE-Pro 63.4%, missing SWE-Verified/LiveCode/SciCode.
- **Cost efficiency: 72/100.** **$2 / $12** is between ~$1.25/$4.25 ≈88 and ~$3/$15 ≈60 (closer to the latter, plus cache $0.20).
- **Overall Score: 85/100.** Mean of (88 + 90 + 95 + 65 + 86) / 5 = 84.8 → **85**. Best-fit: paid balanced GPT-5.6 for TB/coding when Sol’s $4–10/$12–50 is too much; not omni A/V.

---

## Signature

- Provided by: **Grok 4.6 (xAI/grok-4.6)** — 2026-09-19
- Method: public internet research (OpenAI API docs, GPT-5.6 launch post, price-cut post, DeepMind 3.7 Flash comparison, Traictory); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
