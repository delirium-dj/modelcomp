# Iceman — findings by Big Pickle

- Source: OpenCode/Iceman (stealth)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Iceman (Iceman Contributor / Iceman Free)
- **Short description:** An anonymous OpenCode stealth model that appeared on 24 October 2026 and drew 417 billion tokens from 10,856 users in one day. It is text-only with a 262K context and four reasoning levels, and OpenCode keeps prompts and completions to improve the model. Tokenizer tests point to Microsoft's MAI family (and to OpenAI's GPT-6 tokenizer, which cannot distinguish the labs); no lab has claimed it.
- **Provider / access:** OpenCode Zen Free (`opencode/iceman-free`, `https://opencode.ai/inference/openai/v1/chat/completions`) and OpenCode Go (`opencode-go/iceman-contributor-free`, `https://opencode.ai/inference/go/openai/v1/chat/completions`). Chat Completions API.
- **Release / knowledge:** First seen 2026-10-24; Zen Free listing added 2026-11-10. Knowledge cutoff not disclosed.
- **IDs:** `iceman-free` (Zen), `iceman-contributor-free` (Go); `opencode/iceman` in the dataset.
- **Context window:** 262,144 total / 131,072 max output (models.dev, Stealth Models, OpenCode Zen).
- **Modalities:** text in / text out; reasoning yes (low/medium/high/xhigh, `max` rejected); tool calls yes; no image/audio/video input.
- **Pricing (as of 2026-11-11):** $0 on Zen Free and $0 model tokens on Go (Go subscription from $10/month). Both are data deals: OpenCode retains prompts and completions and uses them to improve the model.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

All rows are Stealth Models' independent StealthMark runs (25 October 2026).

Agent / tool use / planning:

- StealthMark overall: **19.2/100**, rank **52 of 57**
- General Intelligence: **11.7/100**
- Foresight (anticipation, 3 levels): **3.2/100**, rank 53/53 — survived 0 of 3
- Latch (cooperative planning, 5 levels): **3.6/100**, rank 50/54 — cleared 1 of 5
- Reasoning efficiency: single-step **29** (rank 51/55), multi-step **37** (rank 25/53)
- Output speed: **46 tokens/s** average (18–62 tok/s at low effort across three runs); ~0.9 s to first answer

Reasoning / knowledge:

- GPQA Diamond, HLE, AIME, LCR, CritPt, AA Intelligence Index: no verified public score found.
- Tokenizer signature: 23/23 exact prompt-token-count matches with MAI Thinking 1, Glyph Cluster, GPT-6 Astra/Luna/Sol, GPT-6.1 Sol and gpt-oss-120b (Stealth Models, 25 October 2026) — an identity lead, not a benchmark.

Visual construction (SVG tasks, 0–100):

- Selfie: **39.3** (rank 52/57)
- Mona Lisa: **19.3** (rank 46/57)
- Beach: **46.4** (rank 45/57)
- Newton's Mirror: **10.1** (rank 53/57)
- Ground Truth: **20.2** (rank 51/57)
- Raccoon: **29.8** (rank 54/57)
- Pelican: **38.0** (rank 52/57)
- Visual Intelligence: **31.0/100**

Coding:

- SWE-bench Verified / Pro, DeepSWE, LiveCodeBench, SciCode, Terminal-Bench: no verified public score found.

Multimodal:

- None — text-only endpoint.

Long context:

- No MRCR / RULER / GraphWalks retrieval result published; the 262K window is unmeasured at length.

### Normalized scores (1–100)

- **Tool use: 24/100.** Tool calls are supported, but the only agentic evidence is the planning games (Foresight 3.2, Latch 3.6) and an 11.7 General Intelligence score; no Terminal-Bench, Tau or SWE-agent result exists.
- **Reasoning: 34/100.** The 31.0 Visual Intelligence is the only mid-tier signal; 11.7 General Intelligence and a last-place Foresight run show planning collapses over multiple steps.
- **Context window: 72/100.** 262K total with an unusually large 131K output, just above the 200K = 70 anchor.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 31/100.** OpenCode positions it as a coding model, but no standard coding benchmark was published; SVG construction (10.1–46.4) is the only measured generation evidence.
- **Cost efficiency: 100/100.** $0 on Zen Free and $0 model tokens on Go — with the explicit caveat that prompts and completions are retained for training.
- **Overall Score: 35/100.** (24 + 34 + 72 + 15 + 31) / 5 = 35.2 → 35. Best fit: free, privacy-tolerant coding assistance and text processing, not agentic or high-stakes work.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-11-11
- Method: public web research (Stealth Models Iceman Contributor guide and StealthMark benchmark page, OpenCode Zen and OpenCode Go model listings, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Stealth Models — Iceman Contributor guide](https://stealthmodels.com/iceman-contributor)
  - [Stealth Models — Iceman Contributor benchmark results](https://stealthmodels.com/benchmarks/models/iceman-contributor)
  - [OpenCode Zen — model list and pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `Iceman_Update.md`, using the same headings.
