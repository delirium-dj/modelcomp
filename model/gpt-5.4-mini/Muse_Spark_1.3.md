# GPT-5.4 Mini — findings by Muse Spark 1.3

- Source: OpenAI/GPT-5.4 mini (`gpt-5.4-mini`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Mini
- **Short description:** OpenAI's strongest mini tier yet (Mar 2026): brings GPT-5.4 strengths to a 2x-faster efficient model for high-volume coding assistants, subagents, and computer use; approaches full 5.4 on SWE-Pro (54.4 vs 57.7) and OSWorld (72.1 vs 75.0).
- **Provider / access:** OpenAI API (`gpt-5.4-mini`, snapshot `gpt-5.4-mini-2026-03-17`; effort none/low/medium/high/xhigh; text+image, tool/function calling, web/file search, computer use, skills); Codex; ChatGPT. OpenCode Zen `opencode/gpt-5.4-mini`.
- **Release / knowledge:** Released 2026-03-17 (OpenAI launch post + API snapshot). Knowledge cutoff Aug 31, 2025 (OpenAI API docs).
- **IDs:** `gpt-5.4-mini` (OpenAI API); `opencode/gpt-5.4-mini` (Zen catalogue / meta.json)
- **Context window:** 400,000 total with 128,000 max output — verified via OpenAI API docs and requesty provider row (400K/128K)
- **Modalities:** Text and image in; text out; reasoning yes (xhigh flagship effort; all launch evals at xhigh); tool calls yes (function calling, web/file search, computer use)
- **Pricing (as of 2026-10-01):** $0.75 per 1M input / $4.50 per 1M output; cached input $0.075 (OpenAI docs + requesty; the-decoder notes 3.0x/2.25x vs GPT-5 mini). No $0 tier — scored on paid pricing.
- **Architecture:** Proprietary efficient reasoning model (undisclosed parameters; 2x+ faster than GPT-5 mini)

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **72.1%** xhigh (OpenAI launch post table; vs 75.0% full 5.4, 42.0% GPT-5 mini — near-flagship computer use)
- Terminal-Bench 2.0: **60.0%** xhigh (OpenAI launch post table; vs 75.1% full, 38.2% GPT-5 mini)
- Toolathon: **42.9%** xhigh (OpenAI launch post table; vs 54.6% full, 26.9% GPT-5 mini)
- Tau2-Bench: **83.3%** (requesty.ai benchmark chart compilation — provisional third-party composite, not vendor-run)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **88.0%** xhigh (OpenAI launch post table; requesty chart 87.5% alongside — same band; vs 93.0% full, 81.6% GPT-5 mini)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-Bench Pro (public): **54.4%** xhigh (OpenAI launch post table; vs 57.7% full, 45.7% GPT-5 mini)
- SWE-bench Verified: **73%** (anotherwrapper.com GPT-5.4-vs-mini comparison row; vs 76.9% full — compiled third-party, provisional)
- Coding Index: **56.1%** (requesty.ai benchmark chart compilation — provisional)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / other: **no verified public score found**

Long context:

- OpenAI MRCR v2 8-needle: **47.7%** 64-128K / **33.6%** 128-256K xhigh (OpenAI launch post table; vs 86.0%/79.3% full — weak retention caps the window)
- Graphwalks: **76.3%** BFS / **71.5%** parents 0-128K xhigh (OpenAI launch post table; vs 93.1%/89.8% full)

### Normalized scores (1–100)

- **Tool use: 80/100.** OSWorld-Verified 72.1% near-flagship plus Terminal-Bench 2.0 60.0% (mid-band top) and Toolathon 42.9%; Tau2 83.3% provisional supports breadth; capped by missing GDPval/Claw/MCP.
- **Reasoning: 82/100.** GPQA 88.0% near-frontier (just under the 90% line); capped by missing HLE/LCR/CritPt/Index/Omniscience — single-benchmark breadth.
- **Context window: 72/100.** 400K/128K in the 200K-500K tier upper-middle; capped hard by weak measured retention (MRCR 47.7% at 64-128K collapsing to 33.6% at 128-256K vs full 86%/79%).
- **Multimodal: 65/100.** Text + image in with vendor-noted multimodal gains fits the +image-in 60-70 band middle; no MMMU/CharXiv number for this exact ID, no video/audio in or non-text out.
- **Coding: 80/100.** SWE-Pro 54.4% (near full 57.7%) plus SWE-Verified 73% and Coding Index 56.1% show strong efficient coding; capped by missing LiveCode/SciCode/Vibe/DeepSWE.
- **Cost efficiency: 90/100.** $0.75/$4.50 per 1M sits just under the ~$1.25/$4.25 ~88 tier on input weight (cache $0.075 softens); 3.0x/2.25x dearer than GPT-5 mini but 70% cheaper blended than full 5.4.
- **Overall Score: 76/100.** Mean of the five quality dims (80+82+72+65+80)/5 = 75.8; best fit as high-volume coding-subagent/computer-use mini; escalate to full 5.4 for hard retention/reasoning.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-10-01
- Method: public internet research (OpenAI "Introducing GPT-5.4 mini and nano" post 2026-03-17 with full xhigh tables, GPT-5.4 mini API docs page, the-decoder.com 2026-03-17 analysis, anotherwrapper.com vs-5.4 comparison, requesty.ai provider/benchmark rows); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
