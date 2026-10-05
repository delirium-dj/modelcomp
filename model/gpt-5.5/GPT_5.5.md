# GPT-5.5 — findings by GPT 5.5

- Source: OpenAI/GPT-5.5
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** GPT-5.5 is OpenAI's 2026 general-purpose frontier model for ChatGPT, Codex, and API workflows, preceding GPT-5.6 and GPT-6.
- **Provider / access:** ChatGPT, Codex, OpenAI API.
- **Release / knowledge:** OpenAI announced GPT-5.5 on 2026-04-23 per public coverage.
- **IDs:** `openai/gpt-5.5`
- **Context window:** OpenAI launch page says GPT-5.5 in Codex has a 400K context window; API/Pro variants can expose larger windows depending on route.
- **Modalities:** GPT-family multimodal support; exact base GPT-5.5 route table was not fully visible in accessible snippets.
- **Pricing (as of 2026-10-05):** OpenAI launch page says Batch/Flex are half standard API rate and Priority is 2.5x standard rate; exact base rows were not exposed in accessible result.
- **Architecture:** Proprietary OpenAI model.

### Raw benchmarks found

Agent / tool use:

- OpenAI launch page: GPT-5.5 rolled out to ChatGPT and Codex; Codex access spans Plus, Pro, Business, Enterprise, Edu, and Go plans (`https://openai.com/index/introducing-gpt-5-5/`).
- Public GPT-5.5 benchmark PDF: reports OSWorld-Verified **78.7%** and CyberGym **81.8%** for GPT-5.5 (`https://mavgpt.ai/pdfs/How_to_Get_the_Most_Out_of_GPT_5_5_2026.pdf`).
- Terminal-Bench 2.1: **no verified public score found**
- OSWorld-Verified: **78.7%**
- CyberGym: **81.8%**

Reasoning / knowledge:

- Public GPT-5.5 benchmark PDF reports MRCR v2 **74.0%** at 512K-1M for GPT-5.5 family.
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**

Coding:

- SWE-Bench Pro: **58.6%** in the public GPT-5.5 benchmark PDF.
- MineBench community comparison reports GPT-5.5 was a meaningful improvement over GPT-5.4 in practical builds (`https://www.reddit.com/r/singularity/comments/1sxapqb/differences_between_gpt_54_and_gpt_55_on_minebench/`).
- LiveCodeBench: **no verified public score found**

Long context:

- Codex context is 400K per OpenAI launch page; public benchmark PDF reports MRCR v2 74.0% at 512K-1M for GPT-5.5 family.

### Normalized scores (1–100)

- **Tool use: 88/100.** OSWorld 78.7% and CyberGym 81.8% support strong agent/tool capability.
- **Reasoning: 89/100.** GPT-5.5 was a frontier OpenAI model at release, capped below 5.6/6-class models.
- **Context window: 90/100.** 400K Codex context plus family long-context benchmark evidence support a high score.
- **Multimodal: 80/100.** GPT-family multimodality is useful, but exact base route modalities were not fully verified.
- **Coding: 87/100.** SWE-Bench Pro 58.6% and Codex integration support strong coding.
- **Cost efficiency: 75/100.** GPT-5.5 is less efficient than later GPT-5.6 price/performance cuts and cheap Flash/open models.
- **Overall Score: 87/100.** Mean of the five quality dimensions; best fit is OpenAI-native coding, tool use, and long-context work in GPT-5.5-era stacks.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
